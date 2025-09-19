
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                {children}
                <button onClick={onClose}>Zamknij</button>
            </div>
        </div>,
        document.getElementById('modals'),
    )
}