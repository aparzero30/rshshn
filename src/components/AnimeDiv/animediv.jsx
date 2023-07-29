import classes from "./animediv.module.css";
import AnimeCard from "../AnimeCard/animecard";

const AnimeDiv = (props) => {
  if (props.animes.length < 1) {
    return null;
  }

  return (
    <div className={classes.animediv}>
      {props.animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};
export default AnimeDiv;
