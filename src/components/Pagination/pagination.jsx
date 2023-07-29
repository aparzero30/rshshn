import classes from "./pagination.module.css";
import PageBox from "./pagebox";
const Pagination = (props) => {
  if (!props.pagination) {
    return null;
  }

  const pageChange = (number) => {
    props.onChange(number);
  };

  return <div className={classes.pagination}>pagination</div>;
};
export default Pagination;
