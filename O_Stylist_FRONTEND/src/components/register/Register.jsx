import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(data) {
    try {
      let res = await fetch('http://localhost:5000/user-api/user', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      let result= await res.json();
      if (result.message==='USER CREATED') {
        navigate('/login');
      }
      else
      {
        setErr(result.message);
      }
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  }

  return (
    <div className='container libre'>
      <br />
      <div className="row">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          {err && <p className='text-danger text-center'>{err}</p>}
          <form className='mb-5 mt-5 bg-light p-5 shadow-lg mx-10' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center mt-3'>Sign up</h2>

            <div className='mb-3'>
              <label htmlFor="username" className='form-label'>
                <FaUser className='mx-1 fs-5 pb-1' />Username
              </label>
              <div className="input-group">
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  className='form-control'
                  placeholder='abc123'
                  {...register('username', { 
                    required: 'Username is required',
                    minLength: {
                      value: 6,
                      message: 'Username must be at least 6 characters long'
                    }
                  })}
                />
              </div>
              {errors.username && <p className='text-danger'>*{errors.username.message}</p>}
            </div>

            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>
                <IoIosMail className='mx-1 fs-3 pb-1' />Email
              </label>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className='form-control'
                  placeholder='abc@gmail.com'
                  {...register('email', { 
                    required: 'Email is required'
                  })}
                />
              </div>
              {errors.email && <p className='text-danger'>*{errors.email.message}</p>}
            </div>

            <div className='mb-3'>
              <label htmlFor="password" className='form-label'>
                <RiLockPasswordFill className='mx-1 fs-3 pb-1' />Password
              </label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  id="password" 
                  className='form-control'
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long'
                    }
                  })}
                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer', height: '37px' }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              {errors.password && <p className='text-danger'>*{errors.password.message}</p>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Height</label>
              <div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="height" 
                    value="tall" 
                    className='form-check-input'
                    {...register('height', { 
                      required: 'Height is required'
                    })}
                  />
                  <label className='form-check-label'>Tall</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="height" 
                    value="average" 
                    className='form-check-input'
                    {...register('height')}
                  />
                  <label className='form-check-label'>Average</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="height" 
                    value="short" 
                    className='form-check-input'
                    {...register('height')}
                  />
                  <label className='form-check-label'>Short</label>
                </div>
              </div>
              {errors.height && <p className='text-danger'>*{errors.height.message}</p>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Weight</label>
              <div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="skinny" 
                    className='form-check-input'
                    {...register('weight', { 
                      required: 'Weight is required'
                    })}
                  />
                  <label className='form-check-label'>Skinny</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="lean" 
                    className='form-check-input'
                    {...register('weight')}
                  />
                  <label className='form-check-label'>Lean</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="lean-muscular" 
                    className='form-check-input'
                    {...register('weight')}
                  />
                  <label className='form-check-label'>Lean Muscular</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="average" 
                    className='form-check-input'
                    {...register('weight')}
                  />
                  <label className='form-check-label'>Average</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="chubby" 
                    className='form-check-input'
                    {...register('weight')}
                  />
                  <label className='form-check-label'>Chubby</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="weight" 
                    value="overweight" 
                    className='form-check-input'
                    {...register('weight')}
                  />
                  <label className='form-check-label'>Overweight</label>
                </div>
              </div>
              {errors.weight && <p className='text-danger'>*{errors.weight.message}</p>}
            </div>

            <div className='mb-3'>
              <label htmlFor="age" className='form-label'>Age</label>
              <input 
                type="number" 
                name="age" 
                id="age" 
                className='form-control'
                placeholder='18'
                {...register('age', { 
                  required: 'Age is required',
                  min: {
                    value: 18,
                    message: 'You must be at least 18 years old'
                  },
                  max: {
                    value: 100,
                    message: 'Please enter a valid age'
                  }
                })}
              />
              {errors.age && <p className='text-danger'>*{errors.age.message}</p>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Gender</label>
              <div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    className='form-check-input'
                    {...register('gender', { 
                      required: 'Gender is required'
                    })}
                  />
                  <label className='form-check-label'>Male</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    className='form-check-input'
                    {...register('gender')}
                  />
                  <label className='form-check-label'>Female</label>
                </div>
                <div className='form-check'>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="other" 
                    className='form-check-input'
                    {...register('gender')}
                  />
                  <label className='form-check-label'>Other</label>
                </div>
              </div>
              {errors.gender && <p className='text-danger'>*{errors.gender.message}</p>}
            </div>

            <div className='mb-3 text-center'>
              <button type="submit" className='btn btn-outline-success'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
