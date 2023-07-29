import { useState } from "react";
import classes from "./filteroption.module.css";
import { useDispatch } from "react-redux";

const FilterOption = (props) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const optionSelectedHandler = () => {
    setSelected((prev) => !prev);
    if (!selected) {
      props.dispatch({ type: "INCREMENT" });
    } else {
      props.dispatch({ type: "DECREMENT" });
    }

    dispatch({ type: "EDIT_FILTER", filter: props.genre.mal_id });
  };

  return (
    <div
      className={classes.filteroption}
      onClick={optionSelectedHandler}
      style={{ backgroundColor: selected ? "#364878" : "transparent" }}
    >
      <p>{props.genre.name}</p>
    </div>
  );
};

export default FilterOption;
