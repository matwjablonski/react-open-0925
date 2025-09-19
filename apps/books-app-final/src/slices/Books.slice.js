import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await fetch('/books.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.books;
    },
);

const BooksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.loading = false;
            state.books = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default BooksSlice.reducer;