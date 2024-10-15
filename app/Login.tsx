"use client";

import { useState } from "react";
import styled from "styled-components";

// Container for the login form
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
`;

// Form heading
const LoginHeading = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// Input field styling
const LoginInput = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

// Button styling
const LoginButton = styled.button`
  background-color: #000;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #000;
  }
`;

// Error message styling
const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  font-size: 0.9rem;
`;

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple mock authentication logic
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeading>Login</LoginHeading>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
