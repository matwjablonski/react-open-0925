import { useState } from "react"

export const Footer = () => {
    const [isContactVisible, setIsContactVisible] = useState(false);

    const toggleContactInfo = () => {
        setIsContactVisible((prev) => !prev);
    }

    return (
        <footer>
            Aplikacja przygotowana przez Mateusz Jabłoński

            <button onClick={toggleContactInfo}>{isContactVisible ? 'Ukryj' : 'Pokaż'} dane kontaktowe do twórcy</button>
            {isContactVisible && (
                <p>
                    Kontakt: mail@mateuszjablonski.com
                </p>
            )}
        </footer>
    )
}

