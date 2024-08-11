import React from 'react'
import loginActionCreator from './ActionCreator'
import { useDispatch } from 'react-redux'

function Login() {
  let dispatch = useDispatch();

  const login = () => {
    dispatch(loginActionCreator());
  };

  return (
    <div 
    className='my-5 mx-auto text-center shadow p-5'
    style={{width:"500px", margin: "100px auto"}}
    >
    <h3>Sign In</h3>
    <div className='my-4'>
      <input type='text' placeholder='enter email' className='form-control' />
    </div>
    <div className='my-4'>
      <input type='password' placeholder='enter password' className='form-control' />
    </div>
    <div className='my-4'>
      <button className='btn btn-dark px-5' onClick={login}>Sign In</button>
    </div>
    <div className='mt-4'>
      <a className='' href='/signup'>Create a create</a>
    </div>
 

    </div>
  )
}

export default Login