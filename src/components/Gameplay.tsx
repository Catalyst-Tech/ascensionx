import Leaf from "./Leaf";
import MediaShelf from "./MediaShelf";

const Gameplay: React.FC = () => {
  return (
    <>
      <Leaf side="Left">
        <h1>About Polygon</h1>
        <p>
          The $ASCN token is hosted on the Polygon network, which provides
          several key benefits for the development of the Ascension Ecoverse
          project. With plasma chain capabilities for in-game transactions
          alongside speed, security, and low gas fees, the Polygon network is
          the perfect home for the $ASCN token and Ascension Ecoverse game.
        </p>
      </Leaf>
      <Leaf side="Right">
        <h1>Gameplay</h1>
        <h2>Start On Your Island!</h2>
        <p>
          Your Ascension Ecoverse journey starts on the Ascension Island NFT
          that you will call home. These islands contain all the resources and
          systems that you need to kickstart your journey, and if you’re lucky,
          some might even come with special traits that give you an in-game
          boost! Learn more about islands below.
        </p>
      </Leaf>
      <MediaShelf
        id="lands"
        media={[
          {
            imageUrl: "/images/island-forest.png",
            caption: "forest",
          },
          {
            imageUrl: "/images/island-quarry.png",
            caption: "quarry",
          },
          {
            imageUrl: "/images/island-wetland.png",
            caption: "wetlands",
          },
          {
            imageUrl: "/images/island-lake.png",
            caption: "lakeside",
          },
          {
            imageUrl: "/images/island-mine.png",
            caption: "mine",
          },
          {
            imageUrl: "/images/island-oil.png",
            caption: "oil fields",
          },
        ]}
      />
      <Leaf side="Left">
        <h2>Harvest, Craft, and Sell Your Way to Success!</h2>
        <p>
          Every resource on your island can be harvested, and either crafted
          into items, or sold! Harvest your resources and craft them into items
          for faster production, then sell off your produce to the Vendor for
          profits! Each resource takes time to harvest, and every crafted item
          has an associated cost, so it's up to you to determine the strategy
          that makes you the most profit!{" "}
          <a href="#/ascensionx/whitepaper">Learn more about each function</a>.
        </p>
        <h2>Watch and Mitigate the World Pollution Bar!</h2>
        <p>
          Just like in real life, every action you take has repercussions, and
          these repercussions are reflected on the World Pollution Bar (WPB).
          Climate-friendly actions will lower the WPB, while unsustainable
          actions will raise the WPB, keeping environmentalism at the top of
          players' minds at all times. Just remember, as the WPB rises, the
          entire Ecoverse will be completely reshaped! Storms, rising water
          levels, temperature changes, and other environmental disasters will
          make it harder and harder to harvest the resources you need to
          survive.{" "}
          <a href="#/ascensionx/whitepaper">
            Learn more about the World Pollution Bar here
          </a>
          .
        </p>
      </Leaf>
      <Leaf side="Right">
        <h2>Earn Returns From the Bank!</h2>
        <p>
          Looking for a way to earn additional returns while you play? Lock up
          your tokens at the Ascension Ecoverse bank with our unique staking
          mechanism. Earn 50% of the in-game fees charged, liquidity pool
          profits, and gain access to extra profits from our designated staking
          wallet, all while you play!
        </p>
        <h2>Sell and Trade With Your Fellow Players!</h2>
        <p>
          Think you can earn better profits without the Vendor? Work out deals
          with your fellow players instead! Use an external marketplace to sell
          anything and everything, as each resource, crafted item, and island
          that you own is stored on the blockchain as an NFT! Plus, use the
          unique Ascension trading mechanism to swap resources with other
          players, and combine trading and sales to create unique and profitable
          strategies!{" "}
          <a href="#/ascensionx/whitepaper">
            Learn more about external sales and trading here
          </a>
          .
        </p>
      </Leaf>
    </>
  );
};

export default Gameplay;
