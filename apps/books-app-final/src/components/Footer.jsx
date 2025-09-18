import { useState } from "react"
import { ContactForm } from "./ContactForm";
import { ContactData } from "./ContactData";

export const Footer = () => {
    const [isContactVisible, setIsContactVisible] = useState(false);

    const toggleContactInfo = () => {
        setIsContactVisible((prev) => !prev);
    }

    return (
        <footer>
            Aplikacja przygotowana przez Mateusz Jabłoński

            <ContactForm />
            <button onClick={toggleContactInfo}>{isContactVisible ? 'Ukryj' : 'Pokaż'} dane kontaktowe do twórcy</button>
            {isContactVisible && (
                <ContactData />
            )}
        </footer>
    )
}

