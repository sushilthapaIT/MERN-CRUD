import React, { useState } from 'react';
import { Pane, TextInputField, Button, Heading, Alert } from 'evergreen-ui';
import './LoginPage.css'; 

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Simple validation for demonstration purposes
    if (email === 'user@gmail.com' && password === '1688') {
      setError(null);
      onLogin(true); // Pass a login status back to App
    } else {
      setError('Invalid email or password');
    }
  };

  return (
<Pane className="pane-container">
  <Heading className="heading">Login to Your Account</Heading>
  {error && <Alert className="alert" intent="danger" title={error} />}
  <TextInputField
    className="text-input-field"
    label="Email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <TextInputField
    className="text-input-field"
    label="Password"
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <Button className="button" appearance="primary" onClick={handleLogin}>
    Login
  </Button>
</Pane>

  );
};

export default LoginPage;