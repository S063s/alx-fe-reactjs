import { useState } from 'react';

const RegistrationForm = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;