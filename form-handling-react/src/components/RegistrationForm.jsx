import { useState } from 'react';
import { Formik } from 'formik';

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ value: { username: '', email: '', password: '' } }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />

        <button type="submit">Register</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;