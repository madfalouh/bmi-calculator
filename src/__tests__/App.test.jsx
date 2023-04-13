/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('App component', () => {
  it('renders the form inputs correctly', () => {
    const { getByPlaceholderText } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    expect(heightFeetInput).toBeInTheDocument();
    expect(heightInchesInput).toBeInTheDocument();
    expect(weightInput).toBeInTheDocument();
  });

  it('only allows valid input for height in feet', () => {
    const { getByPlaceholderText } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    fireEvent.change(heightFeetInput, { target: { value: 'abc' } });
    expect(heightFeetInput.value).toBe('');
    fireEvent.change(heightFeetInput, { target: { value: '5.5' } });
    expect(heightFeetInput.value).toBe('5.5');
  });

  it('only allows valid input for height in inches', () => {
    const { getByPlaceholderText } = render(<App />);
    const heightInchesInput = getByPlaceholderText('Height in inches');
    fireEvent.change(heightInchesInput, { target: { value: '123' } });
    expect(heightInchesInput.value).toBe('123');
    fireEvent.change(heightInchesInput, { target: { value: '7' } });
    expect(heightInchesInput.value).toBe('7');
  });

  it('only allows valid input for weight', () => {
    const { getByPlaceholderText } = render(<App />);
    const weightInput = getByPlaceholderText('Weight');
    fireEvent.change(weightInput, { target: { value: '123.45' } });
    expect(weightInput.value).toBe('123.45');
    fireEvent.change(weightInput, { target: { value: '' } });
    fireEvent.change(weightInput, { target: { value: 'abc' } });
    expect(weightInput.value).toBe('');
  });

  it('calculates the BMI correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '5' } });
    fireEvent.change(heightInchesInput, { target: { value: '8' } });
    fireEvent.change(weightInput, { target: { value: '160' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Your BMI is :'));
  });

  it('displays an error message for invalid input', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '' } });
    fireEvent.change(heightInchesInput, { target: { value: '' } });
    fireEvent.change(weightInput, { target: { value: '160' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Height and weight must be valid'));
  })




  it('displays the correct BMI category for normal weight', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '5' } });
    fireEvent.change(heightInchesInput, { target: { value: '8' } });
    fireEvent.change(weightInput, { target: { value: '150' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton)
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('you are Normal weight'));
  });



  it('displays the correct BMI category for Obese', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '5' } });
    fireEvent.change(heightInchesInput, { target: { value: '8' } });
    fireEvent.change(weightInput, { target: { value: '300' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('you are Obese'));
  });



  it('displays the correct BMI category for Overweigh', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '5' } });
    fireEvent.change(heightInchesInput, { target: { value: '8' } });
    fireEvent.change(weightInput, { target: { value: '170' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('you are Overweigh'));
  });


  it('displays the correct BMI category for Underweight', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const heightFeetInput = getByPlaceholderText('Height in foot');
    const heightInchesInput = getByPlaceholderText('Height in inches');
    const weightInput = getByPlaceholderText('Weight');
    const continueButton = getByTestId('continue-button');
    fireEvent.change(heightFeetInput, { target: { value: '5' } });
    fireEvent.change(heightInchesInput, { target: { value: '8' } });
    fireEvent.change(weightInput, { target: { value: '100' } });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(continueButton);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('you are Underweight'));
  })
})