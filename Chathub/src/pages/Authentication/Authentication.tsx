import { useEffect, useState } from 'react'
import { userCredentials } from '../../Model/data-structures'

import { useAuth } from '../../hooks/AuthContext'

import Cookies from 'universal-cookie'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import UITextField from '../../components/ui/UITextField'
import { validateEmail } from '../../utils/helpers'
const cookies = new Cookies()

const Authentication = () => {
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'

  const [email, setEmail] = useState<userCredentials>(null)
  const [password, setPassword] = useState<userCredentials>(null)
  const [retypedPassword, setRetypedPassword] = useState<userCredentials>(null)

  const { createAccount, signInWithGoogle, signInWithFirebase, currentUser } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser === null) {
      return
    }

    navigate('/', { replace: true })
  }, [currentUser])

  // const handleCreateAccount = () => {
  //   if (email && (password === retypedPassword)) {
  //     try {
  //       createAccount(email, password)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  // }

  const handleSignIn = () => {
    if (email && password) {
      if (validateEmail(email)) {
        try {
          signInWithFirebase(email, password)
        } catch (e) {
          console.error(e)
        }
      } else {
        console.log('Not valid email.')
      }
    }
  }

  const handleSignInWithGoogleFirebase = () => {
    try {
      signInWithGoogle()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className='bg-gray-900 min-h-screen'>
      <div className=' mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Start texting right away! 😝</h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Sign In or Create a new account</p>

          <form action='' className='mt-6 mb-0 space-y-4 p-4 sm:p-6 lg:p-8'>
            <p className='text-center text-white text-lg font-medium'>
              {isLogin ? 'Sign in to your account right away' : 'Create your account today'}
            </p>

            <UITextField
              labelTitle='Email'
              fieldPlaceholder='Enter email'
              handleOnChange={(e) => setEmail(e.target.value)}
              svgElement={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              }
            />

            <UITextField
              labelTitle='Password'
              fieldType='password'
              fieldPlaceholder='Enter password'
              handleOnChange={(e) => setPassword(e.target.value)}
              svgElement={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              }
            />

            {!isLogin && (
              <UITextField
                labelTitle='Re-type password'
                fieldType='password'
                fieldPlaceholder='Re-type password'
                handleOnChange={(e) => setRetypedPassword(e.target.value)}
                svgElement={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                }
              />
            )}

            <button
              type='button'
              onClick={handleSignIn}
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
            >
              {isLogin ? 'Sign in' : 'Create Account'}
            </button>
            <button
              type='button'
              className='py-2 px-4 max-w-md flex justify-center items-center bg-red-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg'
              onClick={handleSignInWithGoogleFirebase}
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                className='mr-2'
                viewBox='0 0 1792 1792'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
              </svg>
              {isLogin ? 'Continue with Google' : 'Create account with Google'}
            </button>
            <Link to={`/auth?mode=${isLogin ? 'signup' : 'login'}`}>
              <p className='text-center pt-7 text-sm text-gray-500'>
                {isLogin ? 'No account?' : 'Already have an account?'}
                <div className='underline'>{isLogin ? 'Sign up?' : 'Login'}</div>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Authentication
