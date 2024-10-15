"use client";

import { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  padding: 20px;
  max-width: 300px;
  margin: auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled.button`
  margin-top: 10px;
`;

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple mock authentication logic
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
