import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-left'>
      <form onSubmit={handleSubmit} className='form' noValidate id='login'>
        <h1>
            Log into your account
        </h1>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>


              <button className='form-input-btn' type='submit'>
                <b>Log in</b>
        </button>
              <span className='form-input-login'>
                Still don't have an account? Register <a href="/signup">here</a>
              </span>
      </form>
    </div>
  );
};

export default FormSignup;