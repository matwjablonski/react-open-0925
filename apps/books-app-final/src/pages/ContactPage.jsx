import { useState } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactData } from "../components/ContactData/ContactData";

export const ContactPage = () => {
    const [isContactVisible, setIsContactVisible] = useState(false);

    const toggleContactInfo = () => {
        setIsContactVisible((prev) => !prev);
    }

    return (
        <div>
            <ContactForm />
            <button onClick={toggleContactInfo}>{isContactVisible ? 'Ukryj' : 'Pokaż'} dane kontaktowe do twórcy</button>
            {isContactVisible && (
                <ContactData />
            )}
        </div>
    )
};