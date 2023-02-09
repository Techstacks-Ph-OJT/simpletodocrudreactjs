import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <header className={classes.container}>
      <li>
        <Link to="/" className={classes.logowrap}>
          <img src="checklist.png" alt="wala" /> Todoware
        </Link>
      </li>
      <nav className={classes.wrapper}>
        <ul>
          <li>
            <Link to="/todo" className={classes.todo}>
              TODO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
