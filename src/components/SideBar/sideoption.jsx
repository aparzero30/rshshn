import classes from "./sideoption.module.css";

const SideOption = (props) => {
  const divStyle = {
    backgroundColor: props.option ? "#12192c" : "transparent",
  };

  const clickSelectHandler = () => {
    let code = 0;

    if (props.label === "FILTER") {
      code = 1;
    }
    if (props.label === "LIST") {
      code = 2;
    }

    props.onClick(code);
  };

  return (
    <div
      className={classes.sideoption}
      style={divStyle}
      onClick={clickSelectHandler}
    >
      <i className={props.className} />
      <label>{props.label}</label>
    </div>
  );
};
export default SideOption;
