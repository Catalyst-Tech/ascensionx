import FaqAccordion from "./FaqAccordion";
import Leaf from "./Leaf";

const Faq: React.FC = () => {
  return (
    <Leaf side="Right">
      <div className="Faq">
        <h1>FAQs</h1>
        <FaqAccordion
          title="When will the Ascension Ecoverse game be released?"
          content={q1}
        />
        <FaqAccordion
          title="What is an Ascension Land NFT and what does it do?"
          content={q2}
        />
        <FaqAccordion title="What does the $ASCN token do?" content={q3} />
        <FaqAccordion
          title="What do I need to have to start playing the Ascension Ecoverse game?"
          content={q4}
        />
        <FaqAccordion
          title="How do I earn crypto while playing Ascension Ecoverse?"
          content={q5}
        />
        <FaqAccordion
          title="Where do I go for all the latest updates on the Ascension Ecoverse project?"
          content={q6}
        />
      </div>
    </Leaf>
  );
};

const q1 =
  "The current release date for the Ascension Ecoverse Alphas is November 4th, 2022. However, the release dates for the Beta and full game have not yet been determined.";
const q2 =
  "Ascension Land NFTs are the building blocks of the Ascension Ecoverse. Each player starts the game on their own island, which serves as a ‘home base’ where players can gather resources, build out sustainable income systems, and craft items. Additionally, a few lucky players will be minting islands that provide players with special traits that give the player resource boosts, which you can learn more about here.";
const q3 =
  "The $ASCN token is the utility token for the Ascension Ecoverse, and it’s linked to many of the in-game actions, such as crafting items, buy and selling crops and resources, and trading with other players. The token will also be used as part of a staking process for players to earn returns on their staked tokens in the near future.";
const q4 =
  "For the best possible experience, check out this link to discover everything you need to start playing! Wait a minute…does that mean I need to buy an Island NFT before I can play Ascension Ecoverse? No, not necessarily! If you’d prefer to play the game without purchasing an Island NFT, you can do that too. The Ascension Ecoverse will have several central community islands where players without an island of their own can meet, interact, collaborate, and earn with other members of the Ecoverse! ";
const q5 =
  "There are three different ways that players can earn crypto from playing Ascension Ecoverse: by harvesting and selling resources, and by staking your tokens with the bank. Players can harvest and sell resources from all over their island, as well as purchase and plant seeds from the vendor to harvest and sell. Additionally, players will have the ability to add to the ASCN/MATIC liquidity pool to receive staking rewards. Players will earn $ASCN directly, which can be reinvested into in-game items and resources or sold as a method of “cashing out.” Finally, players will have the ability to craft rare NFTs from resources that they harvest, which can then be sold on external markets for profit!";
const q6 =
  "The Ascension team is quite active on all official social media accounts, which can be found in the main menu bar, as well as the in the support section of the website. Alternatively, you can check out our Discord community, where you can DM any of the Ascension team members or ask members of the community about the latest Ascension Ecoverse developments.";

export default Faq;
