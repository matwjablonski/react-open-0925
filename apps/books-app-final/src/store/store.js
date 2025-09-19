import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../slices/Contact.slice';

const store = configureStore({
    reducer: {
        contact: contactReducer
    },
    devTools: true,
});

export default store;