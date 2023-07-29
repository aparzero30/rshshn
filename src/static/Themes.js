const StaticThemes = () => {
  const dataArray = [
    {
      mal_id: 50,
      name: "Adult Cast",
      url: "https://myanimelist.net/anime/genre/50/Adult_Cast",
      count: 451,
    },
    {
      mal_id: 51,
      name: "Anthropomorphic",
      url: "https://myanimelist.net/anime/genre/51/Anthropomorphic",
      count: 806,
    },
    {
      mal_id: 52,
      name: "CGDCT",
      url: "https://myanimelist.net/anime/genre/52/CGDCT",
      count: 206,
    },
    {
      mal_id: 53,
      name: "Childcare",
      url: "https://myanimelist.net/anime/genre/53/Childcare",
      count: 63,
    },
    {
      mal_id: 54,
      name: "Combat Sports",
      url: "https://myanimelist.net/anime/genre/54/Combat_Sports",
      count: 90,
    },
    {
      mal_id: 81,
      name: "Crossdressing",
      url: "https://myanimelist.net/anime/genre/81/Crossdressing",
      count: 39,
    },
    {
      mal_id: 55,
      name: "Delinquents",
      url: "https://myanimelist.net/anime/genre/55/Delinquents",
      count: 59,
    },
    {
      mal_id: 39,
      name: "Detective",
      url: "https://myanimelist.net/anime/genre/39/Detective",
      count: 290,
    },
    {
      mal_id: 56,
      name: "Educational",
      url: "https://myanimelist.net/anime/genre/56/Educational",
      count: 247,
    },
    {
      mal_id: 57,
      name: "Gag Humor",
      url: "https://myanimelist.net/anime/genre/57/Gag_Humor",
      count: 231,
    },
    {
      mal_id: 58,
      name: "Gore",
      url: "https://myanimelist.net/anime/genre/58/Gore",
      count: 171,
    },
    {
      mal_id: 35,
      name: "Harem",
      url: "https://myanimelist.net/anime/genre/35/Harem",
      count: 425,
    },
    {
      mal_id: 59,
      name: "High Stakes Game",
      url: "https://myanimelist.net/anime/genre/59/High_Stakes_Game",
      count: 39,
    },
    {
      mal_id: 13,
      name: "Historical",
      url: "https://myanimelist.net/anime/genre/13/Historical",
      count: 1479,
    },
    {
      mal_id: 60,
      name: "Idols (Female)",
      url: "https://myanimelist.net/anime/genre/60/Idols_Female",
      count: 276,
    },
    {
      mal_id: 61,
      name: "Idols (Male)",
      url: "https://myanimelist.net/anime/genre/61/Idols_Male",
      count: 161,
    },
    {
      mal_id: 62,
      name: "Isekai",
      url: "https://myanimelist.net/anime/genre/62/Isekai",
      count: 307,
    },
    {
      mal_id: 63,
      name: "Iyashikei",
      url: "https://myanimelist.net/anime/genre/63/Iyashikei",
      count: 183,
    },
    {
      mal_id: 64,
      name: "Love Polygon",
      url: "https://myanimelist.net/anime/genre/64/Love_Polygon",
      count: 78,
    },
    {
      mal_id: 65,
      name: "Magical Sex Shift",
      url: "https://myanimelist.net/anime/genre/65/Magical_Sex_Shift",
      count: 30,
    },
    {
      mal_id: 66,
      name: "Mahou Shoujo",
      url: "https://myanimelist.net/anime/genre/66/Mahou_Shoujo",
      count: 295,
    },
    {
      mal_id: 17,
      name: "Martial Arts",
      url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
      count: 570,
    },
    {
      mal_id: 18,
      name: "Mecha",
      url: "https://myanimelist.net/anime/genre/18/Mecha",
      count: 1237,
    },
    {
      mal_id: 67,
      name: "Medical",
      url: "https://myanimelist.net/anime/genre/67/Medical",
      count: 38,
    },
    {
      mal_id: 38,
      name: "Military",
      url: "https://myanimelist.net/anime/genre/38/Military",
      count: 680,
    },
    {
      mal_id: 19,
      name: "Music",
      url: "https://myanimelist.net/anime/genre/19/Music",
      count: 3667,
    },
    {
      mal_id: 6,
      name: "Mythology",
      url: "https://myanimelist.net/anime/genre/6/Mythology",
      count: 615,
    },
    {
      mal_id: 68,
      name: "Organized Crime",
      url: "https://myanimelist.net/anime/genre/68/Organized_Crime",
      count: 72,
    },
    {
      mal_id: 69,
      name: "Otaku Culture",
      url: "https://myanimelist.net/anime/genre/69/Otaku_Culture",
      count: 86,
    },
    {
      mal_id: 20,
      name: "Parody",
      url: "https://myanimelist.net/anime/genre/20/Parody",
      count: 736,
    },
    {
      mal_id: 70,
      name: "Performing Arts",
      url: "https://myanimelist.net/anime/genre/70/Performing_Arts",
      count: 112,
    },
    {
      mal_id: 71,
      name: "Pets",
      url: "https://myanimelist.net/anime/genre/71/Pets",
      count: 94,
    },
    {
      mal_id: 40,
      name: "Psychological",
      url: "https://myanimelist.net/anime/genre/40/Psychological",
      count: 412,
    },
    {
      mal_id: 3,
      name: "Racing",
      url: "https://myanimelist.net/anime/genre/3/Racing",
      count: 200,
    },
    {
      mal_id: 72,
      name: "Reincarnation",
      url: "https://myanimelist.net/anime/genre/72/Reincarnation",
      count: 117,
    },
    {
      mal_id: 73,
      name: "Reverse Harem",
      url: "https://myanimelist.net/anime/genre/73/Reverse_Harem",
      count: 72,
    },
    {
      mal_id: 74,
      name: "Romantic Subtext",
      url: "https://myanimelist.net/anime/genre/74/Romantic_Subtext",
      count: 49,
    },
    {
      mal_id: 21,
      name: "Samurai",
      url: "https://myanimelist.net/anime/genre/21/Samurai",
      count: 222,
    },
    {
      mal_id: 23,
      name: "School",
      url: "https://myanimelist.net/anime/genre/23/School",
      count: 1940,
    },
    {
      mal_id: 75,
      name: "Showbiz",
      url: "https://myanimelist.net/anime/genre/75/Showbiz",
      count: 36,
    },
    {
      mal_id: 29,
      name: "Space",
      url: "https://myanimelist.net/anime/genre/29/Space",
      count: 607,
    },
    {
      mal_id: 11,
      name: "Strategy Game",
      url: "https://myanimelist.net/anime/genre/11/Strategy_Game",
      count: 317,
    },
    {
      mal_id: 31,
      name: "Super Power",
      url: "https://myanimelist.net/anime/genre/31/Super_Power",
      count: 640,
    },
    {
      mal_id: 76,
      name: "Survival",
      url: "https://myanimelist.net/anime/genre/76/Survival",
      count: 83,
    },
    {
      mal_id: 77,
      name: "Team Sports",
      url: "https://myanimelist.net/anime/genre/77/Team_Sports",
      count: 301,
    },
    {
      mal_id: 78,
      name: "Time Travel",
      url: "https://myanimelist.net/anime/genre/78/Time_Travel",
      count: 131,
    },
    {
      mal_id: 32,
      name: "Vampire",
      url: "https://myanimelist.net/anime/genre/32/Vampire",
      count: 154,
    },
    {
      mal_id: 79,
      name: "Video Game",
      url: "https://myanimelist.net/anime/genre/79/Video_Game",
      count: 140,
    },
    {
      mal_id: 80,
      name: "Visual Arts",
      url: "https://myanimelist.net/anime/genre/80/Visual_Arts",
      count: 89,
    },
    {
      mal_id: 48,
      name: "Workplace",
      url: "https://myanimelist.net/anime/genre/48/Workplace",
      count: 169,
    },
  ];
  return dataArray;
};
export default StaticThemes;