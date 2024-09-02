import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/signUp/signUp/SignUp';
import api from '../api';
import '@testing-library/jest-dom/vitest'
import React from 'react';



vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../api');

describe('SignUp Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the SignUp form correctly', () => {
    render(<SignUp />);

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('updates form data on input change', () => {
    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Perez' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'johnpe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '32' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johnperez' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Clave12.' } });

    expect(screen.getByLabelText(/First name/i).value).toBe('John');
    expect(screen.getByLabelText(/Last name/i).value).toBe('Perez');
    expect(screen.getByLabelText(/Email/i).value).toBe('johnpe@example.com');
    expect(screen.getByLabelText(/Age/i).value).toBe('32');
    expect(screen.getByLabelText(/Username/i).value).toBe('johnperez');
    expect(screen.getByLabelText(/Password/i).value).toBe('Clave12.');
  });

  it('handles form submission and API call', async () => {
    const apiResponse = { status: 201 };
    api.post.mockResolvedValue(apiResponse);

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Perez' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'johnpe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '32' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johnperez' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Clave12.' } });

    fireEvent.submit(screen.getByRole('button', { name: /Create U/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(expect.any(String), {
        first_name: 'John',
        last_name: 'Perez',
        email: 'johnpe@example.com',
        age: '32',
        username: 'johnperez',
        password: 'Clave12.',
      });
    });

    await waitFor(() => {
      expect(screen.getByText('User created successfully.')).toBeInTheDocument();
  
    });
  });

  it('handles API error during form submission', async () => {
    api.post.mockRejectedValue(new Error('Registration failed'));

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Perez' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'johnpe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '32' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johnperez' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Clave12.' } });

    fireEvent.submit(screen.getByRole('button', { name: /Create U/i }));

    await waitFor(() => {
      expect(screen.getByText('Error occurred during registration.')).toBeInTheDocument();
    });
  });
});






