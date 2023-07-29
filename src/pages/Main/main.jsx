import Wrapper from "../../ui/Wrapper/wrapper";
import SideBar from "../../components/SideBar/sidebar";
import { useState } from "react";
import FilterSec from "../../components/FilterSec/filtersec";

const MainPage = () => {
  const [latest, setLatest] = useState(true);
  const [filter, setFilter] = useState(false);
  const [watch, setWatch] = useState(false);

  const changeSelectHandler = (code) => {
    //0 for latest
    //1 for filter
    //2 for watch

    if (code === 0) {
      setLatest(true);
      setFilter(false);
      setWatch(false);
    }
    if (code === 1) {
      setFilter(true);
      setLatest(false);
      setWatch(false);
    }
    if (code === 2) {
      setWatch(true);
      setFilter(false);
      setLatest(false);
    }
  };

  return (
    <Wrapper>
      <SideBar
        onClick={changeSelectHandler}
        option1={latest}
        option2={filter}
        option3={watch}
      />
      {filter && <FilterSec />}
    </Wrapper>
  );
};
export default MainPage;
