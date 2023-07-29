import classes from "./restwrapper.module.css";

const RestWrapper = (props) => {
  return <div className={classes.restwrapper}>{props.children}</div>;
};
export default RestWrapper;
