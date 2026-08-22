import React, { useState, useEffect } from 'react';
import { Bell, Check, ExternalLink, X, AlertTriangle, CheckCircle, Info, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockEngine } from '../../mock/mockEngine';
import { NotificationItem } from '../../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setNotifications(mockEngine.getNotifications());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRead = (id: string, link?: string) => {
    mockEngine.markNotificationRead(id);
    setNotifications(mockEngine.getNotifications());
    if (link) {
      navigate(link);
      onClose();
    }
  };

  const getIcon = (type: NotificationItem['type']) => {
    const iconStyle = {
      success: { color: 'var(--df-status-present)' },
      warning: { color: 'var(--df-status-pending)' },
      action: { color: 'var(--df-status-absent)' },
      info: { color: 'var(--df-status-info)' },
    };
    const s = iconStyle[type] || iconStyle.info;

    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={s} />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" style={s} />;
      case 'action':
        return <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" style={s} />;
      default:
        return <Info className="w-5 h-5 shrink-0 mt-0.5" style={s} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm"
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div
        className="w-full max-w-md h-full flex flex-col animate-in slide-in-from-right duration-200"
        style={{
          background: 'var(--df-surface)',
          borderLeft: '1px solid var(--df-border)',
          boxShadow: 'var(--df-shadow-overlay)',
        }}
      >
        {/* Header */}
        <div
          className="p-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid var(--df-border)' }}
        >
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5" style={{ color: 'var(--df-text-primary)' }} />
            <h3 className="df-heading">
              Notifications
            </h3>
          </div>
          <button onClick={onClose} className="p-1" style={{ color: 'var(--df-text-muted)' }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-12 df-label" style={{ color: 'var(--df-text-muted)' }}>
              No notifications at this time.
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => handleRead(item.id, item.link)}
                className="p-4 transition-all cursor-pointer border"
                style={{
                  borderRadius: 'var(--df-radius)',
                  background: item.read ? 'var(--df-bg)' : 'var(--df-surface)',
                  borderColor: item.read ? 'var(--df-border)' : 'var(--df-accent)',
                  opacity: item.read ? 0.7 : 1,
                }}
              >
                <div className="flex items-start space-x-4">
                  {getIcon(item.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="df-label font-bold truncate" style={{ color: 'var(--df-text-primary)' }}>{item.title}</h4>
                      <span className="df-mono text-[10px]" style={{ color: 'var(--df-text-muted)' }}>
                        {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--df-text-secondary)' }}>{item.message}</p>
                    {item.link && (
                      <span
                        className="inline-flex items-center text-[11px] font-bold mt-3 hover:underline uppercase tracking-wide"
                        style={{ color: 'var(--df-accent)' }}
                      >
                        Take Action <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
