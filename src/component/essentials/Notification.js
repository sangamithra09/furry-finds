// src/components/Notification.js
import React from 'react';
import './Notification.css';

const Notification = ({ message, show }) => {
  return (
    show && (
      <div className="notification">
        {message}
      </div>
    )
  );
};

export default Notification;
