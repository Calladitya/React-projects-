
import React, { useState } from 'react';
import './Form.css'

function Form() {
  const [msg, setmsg] = useState('');//for check msges
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      setmsg('Valid Email Address');
    } else {
      setmsg('Invalid Email Address');
    }
  };

  const handlePassword = (event) => {
    const { id, value } = event.target;

    if (id === 'password') {
      setpassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setmsg('Invalid Email Address');
      return;
    }

    if (password.length < 8) {
      setmsg('Password must contain at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      setmsg('Passwords do not match');
      return;
    }

    setmsg('Account created successfully!');
  };

  return (
    <section className="form">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handlePassword}
            required
          />
        </div>

        <p>{msg}</p>

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}

export default Form;
