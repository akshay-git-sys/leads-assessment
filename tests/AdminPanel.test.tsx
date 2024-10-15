import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminPanel from '../app/AdminPanel';

// Mocking next/router for testing
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('AdminPanel Component', () => {
  it('renders the admin panel with sidebar and leads', () => {
    render(<AdminPanel />);

    // Check if logo and navigation items are present
    const logo = screen.getByText(/Company Logo/i);
    expect(logo).toBeInTheDocument();

    const leadsNav = screen.getByText(/Leads/i);
    expect(leadsNav).toBeInTheDocument();

    // Check if the Leads List title is present
    const leadsTitle = screen.getByText(/Leads/i);
    expect(leadsTitle).toBeInTheDocument();
  }); 
});
