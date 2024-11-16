import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter.js';

beforeEach(() => { 

})

test('renders counter message', () => {
  render(<Counter />);
  const counterHeader = screen.getByText(/counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('-1');
});
