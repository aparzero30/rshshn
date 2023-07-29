const SearchHelper = async (search, page) => {
  let url = "https://api.jikan.moe/v4/anime?genres=" + search + "&page=" + page;

  const response = await fetch(url, {
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export default SearchHelper;
