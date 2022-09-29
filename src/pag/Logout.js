import React from 'react'
import {auth} from '../firebase';
import {signOut} from 'firebase/auth';

const Logout = () => {
  const logOutFunc = () => {
    signOut(auth);
  }

  return (
    <button onClick={logOutFunc} className='btn btn-danger'>LogOut</button>
  )
}
export default Logout;