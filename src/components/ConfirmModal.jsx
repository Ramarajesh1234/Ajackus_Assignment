import React from "react";

const ConfirmModal = ({ visible, title, message, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div className="modal-overlay">
      <div className="modal small">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
