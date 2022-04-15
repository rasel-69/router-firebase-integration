import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {singInWithGoogle}=useFirebase();

    return (
        <div>
            <h2>Please Login Here!</h2>
            <div style={{margin:'20px'}}>
                <button onClick={singInWithGoogle}>Sign In Google</button>
            </div>

            <form >
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;