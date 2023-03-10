import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatchFn = useDispatch();

  const navBar = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button
            onClick={() => {
              dispatchFn(authActions.logout());
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && navBar}
    </header>
  );
};

export default Header;
