import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../slices/Contact.slice';
import userReducer from '../slices/User.slice';
import booksReducer from '../slices/Books.slice';

const store = configureStore({
    reducer: {
        contact: contactReducer,
        user: userReducer,
        books: booksReducer,
    },
    devTools: true,
});

export default store;