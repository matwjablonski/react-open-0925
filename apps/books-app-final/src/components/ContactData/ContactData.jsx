import { useEffect } from "react";

export const ContactData = () => {

     useEffect(() => {
        console.log('ContactData component mounted');

        return () => {
            console.log('ContactData component unmounted');
        }
    }, []);

    return (
        <p>
            Kontakt: mail@mateuszjablonski.com
        </p>
    )
}