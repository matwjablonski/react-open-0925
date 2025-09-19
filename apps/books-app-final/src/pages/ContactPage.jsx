import { useCallback } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactData } from "../components/ContactData/ContactData";
import { useDispatch, useSelector } from "react-redux";
import { toggleContactInfo as toggleContactInfoAction } from "../slices/Contact.slice";

export const ContactPage = () => {
    // const [isContactVisible, setIsContactVisible] = useState(false);
    const dispatch = useDispatch();
    const isContactVisible = useSelector(state => state.contact.isContactVisible);

    const toggleContactInfo = useCallback(() => {
        // setIsContactVisible((prev) => !prev);
        dispatch(toggleContactInfoAction());
    }, [dispatch]);

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