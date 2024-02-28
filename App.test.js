import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the start page', () => {
    render(<App />);
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('navigates to city selection page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText('City Selection')).toBeInTheDocument();
  });

  it('selects a city for each cop', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Yapkashnagar'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    expect(screen.getByText('City Yapkashnagar')).toBeChecked();
    expect(screen.getByText('City Lihaspur')).toBeChecked();
    expect(screen.getByText('City Narmis City')).toBeChecked();
  });

  it('navigates to vehicle selection page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Yapkashnagar'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Vehicle Selection')).toBeInTheDocument();
  });

  it('selects a vehicle for each cop', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Yapkashnagar'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('EV Bike'));
    fireEvent.click(screen.getByText('EV Car'));
    fireEvent.click(screen.getByText('EV SUV'));
    expect(screen.getByText('EV Bike')).toBeChecked();
    expect(screen.getByText('EV Car')).toBeChecked();
    expect(screen.getByText('EV SUV')).toBeChecked();
  });

  it('displays the result page', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Yapkashnagar'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('EV Bike'));
    fireEvent.click(screen.getByText('EV Car'));
    fireEvent.click(screen.getByText('EV SUV'));
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Result')).toBeInTheDocument();
  });

  it('displays the successful capture status', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Yapkashnagar'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('EV Bike'));
        fireEvent.click(screen.getByText('EV Car'));
    fireEvent.click(screen.getByText('EV SUV'));
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Successful Capture')).toBeInTheDocument();
  });

  it('displays the unsuccessful capture status', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('City Nuravaram'));
    fireEvent.click(screen.getByText('City Lihaspur'));
    fireEvent.click(screen.getByText('City Narmis City'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('EV Bike'));
    fireEvent.click(screen.getByText('EV Car'));
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Unsuccessful Capture')).toBeInTheDocument();
  });
});