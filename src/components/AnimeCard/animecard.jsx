import classes from "./animecard.module.css";

const AnimeCard = (props) => {
  const imageUrl = props.anime.images.jpg.large_image_url;
  const title = props.anime.titles[0].title;

  const imgStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={classes.animecard} style={imgStyle}>
      <p className={classes.title}>{title}</p>
    </div>
  );
};
export default AnimeCard;
