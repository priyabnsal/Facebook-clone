import React from 'react';
import "./Login.css";
import Button from '@material-ui/core/Button';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {

    const[state, dispatch] = useStateValue();

    const signIn = () => {
        //signin
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="fb_logo"
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="logo"
                />
                <div className="madeby">
                    <p>Made With ❤️ <a className="loginLink" target="_blank" href="https://www.instagram.com/priyabnsal/">Priya Bansal</a></p>
                </div>
            </div>
            <Button type="submit" onClick={signIn}>
            Sign In
            </Button>
        </div>
    );
}

export default Login;
