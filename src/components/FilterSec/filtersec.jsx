import classes from "./filtersec.module.css";
import RestWrapper from "../../ui/RestWrapper/restwrapper";
import { useEffect, useState } from "react";
import FilterDiv from "./filterdiv";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchHelper from "./searchhelper";
import StaticGenres from "../../static/Genres";
import StaticThemes from "../../static/Themes";
import StaticDemographics from "../../static/Demographics";
import AnimeDiv from "../AnimeDiv/animediv";
import Pagination from "../Pagination/pagination";

const FilterSec = (props) => {
  const filterSearch = useSelector((state) => state.filterArray);

  const [searchedAnime, setSearchAnime] = useState([]);
  const [pagination, setPagiantion] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  const [demographics, setDemographics] = useState([]);

  useEffect(() => {
    setGenres(StaticGenres());
    setThemes(StaticThemes());
    setDemographics(StaticDemographics());
  }, []);

  const searchAnime = async () => {
    const commaSeparatedString = filterSearch.join(",");
    const searchData = await SearchHelper(commaSeparatedString, currentPage);
    //set array of anime
    setSearchAnime(searchData.data);
    setPagiantion(searchData.pagination);
  };

  const pageChange = (number) => {
    console.log("change");
    setCurrentPage(number);
    searchAnime();
  };

  return (
    <RestWrapper>
      <FilterDiv options={genres} categ="GENRES" />
      <FilterDiv options={demographics} categ="DEMOGRAPHICS" />
      <FilterDiv options={themes} categ="THEMES" />
      <div className={classes.btn}>
        <button onClick={searchAnime} disabled={filterSearch.length === 0}>
          FIND ANIME
        </button>
      </div>
      <AnimeDiv animes={searchedAnime} />
      <Pagination pagination={pagination} onChange={pageChange} />
    </RestWrapper>
  );
};
export default FilterSec;
