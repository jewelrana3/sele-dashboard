import React from 'react';

const styles: {
    overlay: React.CSSProperties;
    modal: React.CSSProperties;
    closeButton: React.CSSProperties;
} = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: '5px',
        minWidth: '300px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        background: 'transparent',
        fontSize: '30px',
        cursor: 'pointer',
    },
};

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                {onClose && (
                    <button onClick={onClose} style={styles.closeButton} className="text-[#BBB69A] h-5 w-5">
                        X
                    </button>
                )}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
