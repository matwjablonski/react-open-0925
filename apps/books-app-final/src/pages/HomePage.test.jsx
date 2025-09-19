import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { HomePage } from "./HomePage";
import { Provider } from "react-redux";
import store from "../store/store";
import { it, expect } from "vitest";

describe('HomePage', () => {
    it('should render correctly', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>);
        const heading = screen.getByRole('heading', { level: 2 });
        
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Jakie książki chcesz przeczytać Nieznajomy?');
    });
})