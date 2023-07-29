import classes from "./pagebox.module.css";
const PageBox = (props) => {
  const pageChange = () => {
    props.onChange(props.number);
  };

  return (
    <div className={classes.pagebox} onClick={pageChange}>
      {props.number}
    </div>
  );
};
export default PageBox;
