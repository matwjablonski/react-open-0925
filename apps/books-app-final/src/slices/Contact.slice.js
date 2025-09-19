import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name: 'contact',
    initialState: {
        isContactVisible: false
    },
    reducers: {
        toggleContactInfo: (state) => {
            state.isContactVisible = !state.isContactVisible;
        }
    }
})

export const { toggleContactInfo } = ContactSlice.actions;
export default ContactSlice.reducer;