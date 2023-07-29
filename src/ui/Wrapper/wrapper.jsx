import classes from "./wrapper.module.css";
import { Outlet } from "react-router-dom";

const Wrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};
export default Wrapper;
