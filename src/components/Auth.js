import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);

  const dispathFn = useDispatch();

  function performLogin(e) {
    e.preventDefault();
    if (email.current.value.length > 0 && password.current.value.length > 0) {
      dispathFn(authActions.login());
    } else {
      setError(true);
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onClick={performLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={password} />
          </div>
          <button type='submit'>Login</button>
          {error && <p className={classes.error}>Please enter some values in email and password fields.</p>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
