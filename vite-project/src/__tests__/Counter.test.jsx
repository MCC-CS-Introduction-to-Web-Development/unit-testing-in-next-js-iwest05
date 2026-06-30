import React from 'react'; // prob dont need this anymore but keeping it just in case
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

// snapshot
describe('Counter Snapshot', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Counter component tests', () => {
  // check initial value
  test('shows initial counter value of 0', () => {
    render(<Counter />);
    const counterDisplay = screen.getByTestId('counter-value');
    expect(counterDisplay).toHaveTextContent('0');
  });

  // increment button
  test('increments the counter when increment button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  // decrement button
  test('decrements the counter when decrement button is clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText('Decrement');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });

  // multiple clicks
  test('counter value updates correctly after multiple button clicks', () => {
    render(<Counter />);
    const inc = screen.getByText('Increment');
    const dec = screen.getByText('Decrement');

    // 3 increments then 1 decrement = 2
    fireEvent.click(inc);
    fireEvent.click(inc);
    fireEvent.click(inc);
    fireEvent.click(dec);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });
});
