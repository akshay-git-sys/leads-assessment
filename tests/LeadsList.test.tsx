import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {describe, expect} from '@jest/globals';
import LeadsList from '../app/LeadsList';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Jorge Ruiz', submitted: '02/02/2024 2:45 PM', status: 'PENDING', country: 'Mexico' },
      { id: 2, name: 'Jane Doe', submitted: '02/03/2024 1:30 PM', status: 'PENDING', country: 'USA' },
    ]),
  })
) as jest.Mock;

describe('LeadsList Component', () => {  

  it('renders leads correctly', async () => {
    render(<LeadsList />);
    
    // Wait for leads to be rendered
    const leadName = await screen.findByText('Jorge Ruiz');
    expect(leadName).toBeInTheDocument();
    
    const leadStatus = await screen.findByText('PENDING');
    expect(leadStatus).toBeInTheDocument();
  });

  it('marks a lead as reached out', async () => {
    render(<LeadsList />);

    // Wait for the button to be rendered
    const button = await screen.findByText('Mark as Reached Out');
    
    fireEvent.click(button);
    
    // Check if the status changes
    const leadStatus = await screen.findByText('REACHED_OUT');
    expect(leadStatus).toBeInTheDocument();
  });

  it('filters leads by search term', async () => {
    render(<LeadsList />);

    const searchInput = screen.getByPlaceholderText('Search by name or country...');
    fireEvent.change(searchInput, { target: { value: 'Jorge' } });
    
    const leadName = await screen.findByText('Jorge Ruiz');
    expect(leadName).toBeInTheDocument();

    const leadNameNotVisible = screen.queryByText('Jane Doe');
    expect(leadNameNotVisible).not.toBeInTheDocument();
  });
});
