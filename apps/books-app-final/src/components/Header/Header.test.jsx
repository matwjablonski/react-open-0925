import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('Header', () => {
	it('user click login button modal with login form appears', () => {
		render(
			<Provider store={store}>
				<Header />
			</Provider>
		);

		const loginButton = screen.getByText('Zaloguj');
		fireEvent.click(loginButton);

		const loginForm = screen.getByTestId('login-form');
		expect(loginForm).toBeInTheDocument();
	});
});