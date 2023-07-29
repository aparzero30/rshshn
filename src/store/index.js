import { createStore } from "redux";

const initialState = {
  filterArray: [],
  genres: [],
  themes: [],
  demographics: [],
};

const userDataReducer = (state = initialState, action) => {
  if (action.type === "EDIT_FILTER") {
    const index = state.filterArray.indexOf(action.filter);
    let newState;
    let newArray;
    if (index !== -1) {
      newArray = state.filterArray.filter(
        (element) => element !== action.filter
      );
    } else {
      newArray = [...state.filterArray, action.filter];
    }
    newState = { ...state, filterArray: newArray };
    return newState;
  }
  if (action.type === "SET_GENRES") {
    const newState = { ...state, genres: action.genres };
    console.log("success1", newState);
    return newState;
  }
  if (action.type === "SET_THEMES") {
    const newState = { ...state, themes: action.themes };
    console.log("success2", newState);
    return newState;
  }
  if (action.type === "SET_DEMO") {
    const newState = { ...state, demographics: action.demographics };
    console.log("success3", newState);
    return newState;
  }

  return state;
};

const store = createStore(userDataReducer);

export default store;
