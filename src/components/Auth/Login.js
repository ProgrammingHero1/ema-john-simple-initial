
import React, { useState } from 'react';
import { useAuth } from "./use-auth.js";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isNewAccount, setNewAccount] = useState(false);
  const history = useHistory();
  const auth = useAuth();
  const onSubmit = data => {
    console.log(data.email, data.password);
    if(isNewAccount){
      auth.signup(data.email, data.password)
      .then(res=> {
        console.log('success', res);
        history.push('/shop')
      })
    }
    else{
      auth.signin(data.email, data.password)
      .then(res=> {
        console.log('success', res);
      })
    }
  };

  const toggleSigninType = e => setNewAccount(e.target.checked);

  return (
    <div style={{ textAlign: 'center' }}>
      <input id="newAccoount" type="checkbox" onChange={toggleSigninType} value="New Account"></input>
      <label htmlFor="newAccoount">New Account</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" placeholder="Your Email" ref={register} /> {/* register an input */}
        <br></br>
        <br />
        <input name="password" type="password" placeholder="Your Password" ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}

        <br /><br />
        <button>{isNewAccount ? 'Create Account' : ' Sign in'}</button>
      </form>

    </div>
  );
};

export default Login;