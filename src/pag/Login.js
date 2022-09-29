import React from "react";
import GoogleButton from "react-google-button";
import {auth} from '../firebase'
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const signIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider); 
    }
    return(
          <GoogleButton className="Go" style={{background:'black'}} onClick={signIn}/>
    )

}

export default Login