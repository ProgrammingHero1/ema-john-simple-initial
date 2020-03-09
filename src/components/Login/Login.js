import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.singInWithGoogle);
    return (
        <div>
            <h1>Join the Party !!!</h1>
            <button onClick={auth.singInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;