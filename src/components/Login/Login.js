import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please Login Here!</h2>
            <form >
                <input type="text" placeholder='Enter your name ' />
                <br />
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;