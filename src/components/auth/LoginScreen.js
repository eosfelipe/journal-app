import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import LoginImg from '../../assets/login.svg'
import { ReactComponent as GoogleIcon } from '../../assets/google.svg'
import { UserIcon, LockClosedIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: 'escobedo.felipe@hotmail.com',
    password: '123456'
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <div className='login'>
      <div className='login__content'>
        <div className='login__img'>
          <img src={LoginImg} alt='login-img' />
        </div>
        <div className='login__forms'>
          <form className='login__register' onSubmit={handleLogin}>
            <h1 className='login__title'>Sign In</h1>
            <div className='login__box'>
              <i className='login__icon'>
                <UserIcon />
              </i>
              <input
                className='login__input'
                type='text'
                name='email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className='login__box'>
              <i className='login__icon'>
                <LockClosedIcon />
              </i>
              <input
                className='login__input'
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <Link to='/forgot' className='login__forgot'>
              Forgot password?
            </Link>
            <button type='submit' className='login__button' disabled={loading}>
              Sign In
            </button>
            <div>
              <span className='login__account'>Dont have an Account? </span>
              <Link className='login__signin' to='/auth/register'>
                Sign Up
              </Link>
            </div>
            <div className='login__social'>
              <span className='login__account'>Login with social networks</span>
              <button
                className='login__social-icon pointer'
                onClick={handleGoogleLogin}
                type='button'
              >
                <GoogleIcon style={{ width: '25px', fill: '#363636' }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
