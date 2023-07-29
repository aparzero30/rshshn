import { useState } from "react";
import classes from "./filterdiv.module.css";
import { useEffect } from "react";
import FilterOption from "./filteroption";
import { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const FilterDiv = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Function to update the 'show' state based on screen width
    const updateShowBasedOnScreenWidth = () => {
      const screenWidth = window.innerWidth;
      setShow(screenWidth > 800); // Set 'show' to true if screen width is greater than 800px, otherwise false
    };

    // Attach the event listener to listen for window resize events
    window.addEventListener("resize", updateShowBasedOnScreenWidth);

    // Call the function immediately to set the initial value
    updateShowBasedOnScreenWidth();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateShowBasedOnScreenWidth);
    };
  }, []);

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const showHideButtonClick = () => {
    setShow(!show);
  };

  return (
    <div className={classes.categ}>
      <div className={classes.tab}>
        <section>
          <h4>{props.categ}</h4>
          {state.count > 0 ? <h4>{state.count}</h4> : null}
        </section>
        <section className={classes.secbtn}>
          <button onClick={showHideButtonClick}>
            {show ? "HIDE" : "SHOW"}
          </button>
        </section>
      </div>

      <div
        className={classes.filterdiv}
        style={{ display: show ? "flex" : "none" }}
      >
        {props.options.map((genre) => (
          <FilterOption key={genre.mal_id} genre={genre} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default FilterDiv;
