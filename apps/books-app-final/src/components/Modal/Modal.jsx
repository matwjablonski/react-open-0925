
import { createPortal } from "react-dom";

export const Modal = ({ open }) => {
    if (!open) return null;

    return createPortal(
        <div>
            <p>Jestem w modalu</p>
        </div>,
        document.getElementById('modals'),
    )
}