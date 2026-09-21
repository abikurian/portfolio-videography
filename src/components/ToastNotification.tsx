import React, { useState } from 'react';

interface ToastNotificationProps {
  email: string;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ email }) => {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={copyEmail}
        className="font-display text-h2 font-bold text-text hover:text-accent tracking-tight underline underline-offset-8 decoration-line hover:decoration-accent transition-all duration-fast text-left"
      >
        {email}
      </button>

      {/* Floating Mono Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-bg-raised border border-line px-4 py-2 font-mono text-xs text-accent uppercase tracking-widest shadow-2xl flex items-center space-x-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>COPIED ✓</span>
        </div>
      )}
    </div>
  );
};
