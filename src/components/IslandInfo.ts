const Forest =
  "Minting an island with an abundance of wood can be a great way to get an early boost in the Ecoverse, and what better place than a forest to harvest additional wood? The Forest Island provides owners with a boosted in-game supply of wood, helping them gather the required resources to craft items faster at the start of the game!";

const Quarry =
  "Just like the Forest Island, the Quarry Island provides players with an in-game boost to an essential resource in the Ascension Ecoverse; stone. With a giant quarry dominating the center of the island, players who mint the Quarry Island can use their additional resources to make crafting smoother during the early stages of the game!";

const Wetlands =
  "Although it may not look like much, the swampy Wetlands Island is actually a profitable goldmine for players who manage to mint one! With two different renewable resources on the island, players will always have a way of generating in-game profit. Plus, with an increased amount of grass on the island, players will have more opportunities to generate randomized seeds for their island farms!";

const Lakeside =
  "Looking for a sustainable food source? Then the Lakeside Island should be your desired target in the Ascension Ecoverse! The Lakeside Island is home to a central lake that is teeming with schools of fish, providing an in-game boost that owners can turn into instant profit.";

const Mine =
  "If you’ve always thought of yourself as an explorer, then the Mine Island should help you feel right at home in the Ascension Ecoverse! Not only does the island come with a gigantic cave for you to explore, but the cave is also home to coal, one of the rarest resources in the Ascension Ecoverse game. Although it doesn’t seem to be much help crafting items just yet, it might be worth a player’s while to save their coal for later…";

const Oil =
  "Oil is one of the rarest natural resources on planet Earth, and that doesn’t change in the Ascension Ecoverse! The Oil Fields island is the rarest island in the game, providing players with an abundance of oil right at the start of the game! Just like coal, it may not seem to have much use aside from it’s profitability, players may want to store their oil away for future uses…";

function getText(name: String) {
  switch (name) {
    case "forest":
      return Forest;
    case "quarry":
      return Quarry;
    case "wetlands":
      return Wetlands;
    case "lakeside":
      return Lakeside;
    case "mine":
      return Mine;
    case "oil fields":
      return Oil;
    default:
      return null;
  }
}

export default getText;
