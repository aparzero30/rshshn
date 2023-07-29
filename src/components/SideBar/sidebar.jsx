import classes from "./sidebar.module.css";
import SideOption from "./sideoption";

const SideBar = (props) => {
  const selectSideHandler = (code) => {
    props.onClick(code);
  };

  return (
    <div className={classes.sidebar}>
      <SideOption
        className="fa-solid fa-newspaper"
        label="LATEST"
        onClick={selectSideHandler}
        option={props.option1}
      />
      <SideOption
        className="fa-solid fa-filter"
        label="FILTER"
        onClick={selectSideHandler}
        option={props.option2}
      />
      <SideOption
        className="fa-solid fa-film"
        label="LIST"
        onClick={selectSideHandler}
        option={props.option3}
      />
    </div>
  );
};
export default SideBar;
