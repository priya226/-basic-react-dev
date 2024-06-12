import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate =useNavigate();

  const formFields = {
    email: {
      label: 'Email',
      type: 'email',
      validation: (value) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(value).toLowerCase()) ? '' : 'Invalid email address';
      }
    },
    password: {
      label: 'Password',
      type: 'password',
      validation: (value) => {
        return value.length >= 6 ? '' : 'Password must be at least 6 characters';
      }
    }
  };

  useEffect(() => {
    const noErrors = Object.keys(errors).every(key => errors[key] === '');
    const allFieldsFilled = Object.keys(formData).every(key => formData[key] !== '');
    setIsFormValid(noErrors && allFieldsFilled);
  }, [errors, formData]);

  const handleChange = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: formFields[field].validation(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted', formData);
      navigate('/')
    }
  };

  return (
    <div key='formlogin'>
      <form onSubmit={handleSubmit}>
      {Object.keys(formFields).map((field) => (
        <div key={field}>
          <label>{formFields[field].label}:</label>
          <input
            type={formFields[field].type}
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            onBlur={(e) => handleChange(field, e.target.value)}
          />
          {errors[field] && <span style={{ color: 'red' }}>{errors[field]}</span>}
        </div>
      ))}
      <button type="submit" disabled={!isFormValid}>Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
// https://chatgpt.com/share/245190a7-8bdd-48a4-b19c-41553f47b9bb