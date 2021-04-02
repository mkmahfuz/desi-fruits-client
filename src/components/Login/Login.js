import React, { useContext, useState } from 'react';
import './Login.css';
//firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../configs/firebase.config';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    //initialze firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    //usecontext to set logged in user info
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //error and other info state
    const [customErrors, setCustomErrors] = useState({ error: '' }, { info: '' });

    //redirect after loggedin
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //sign in with google
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    //
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                //setUser(signedInUser);

                setLoggedInUser(signedInUser); //sent user data to context
                history.replace(from); // reactrouter redirect loginpage function

                console.log(displayName, photoURL, email)
            })
            .catch(err => {
                console.log(err);
                setCustomErrors({ error: err });
            })
        // console.log('signed in click')
    }

    return (
        <div>
            <div className='login-container'>
                <h2>Desi Fruits login </h2>
                <div className='google-signIn'>
                    <p>-------- --------</p>
                    <p>--- Google Sign In ---</p>
                    <p>-------- --------</p>

                    <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} style={{ marginRight: '2rem' }} /><span >Continue with Google</span></button>


                </div>
               
            </div>
        </div>
    );
};

export default Login;