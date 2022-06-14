import TextShelf from "./TextShelf";

const Roadmap: React.FC = () => {
  return (
    <>
      <h1>Join Us On The Journey To Ascension!</h1>
      <p>
        As the Ascension team shoots for new heights, this roadmap will be
        updated regularly to reflect our new goals, achievements, aspirations,
        and visions for the future of the Ascension token, game, and ecosystem.
      </p>
      <TextShelf
        media={[
          {
            name: "Ancestral Stage",
            key: 1,
            desc: [
              "$ASCN Whitepaper V1 & Ascension Ecoverse Technical Blueprints Released",
              "$ASCN Initial Token Launch On QuickSwap",
              "Series 1 Major Element Land NFT Launch",
              "$ASCN Token Staking Launched",
              "Direct Fiat On-Ramp Integration",
              "Surprise Community NFT Pack Drops (New gear, pets, and more!)",
              "Initial Ascension Ecoverse Gameplay Mechanics Revealed",
              "Ascension Ecoverse Game Demo (Alpha) Launched",
            ],
          },
          {
            name: "Evolved Stage",
            key: 2,
            desc: [
              "$ASCN Token Listing On KuCoin, CoinMarketCap, and CoinGecko",
              "In-House NFT Marketplace Released",
              "Vehicles, Gear & Peripherals NFT Pack Drops",
              "Ascension Ecoverse Game Demo Quests Released",
              "$ASCN Partnership Program Launched",
              "Series 2 Special Element Land NFT Launch",
              "First Round Equity Funding Completed",
              "Limited Partnership NFTs Released",
              "Ascension Ecoverse Game Beta Launched",
            ],
          },
          {
            name: "Ascended Stage",
            key: 3,
            desc: [
              "Ascension Ecoverse Full Game Launch",
              "Ascension Ecoverse Holiday Events, Contests, & Tournaments",
              "$ASCN Cross-Chain Integration",
              "Decentralized $ASCN Player DAO",
              "$ASCN Token Holder Game Launchpad",
              "Carbon Credit Partnership & Integration",
              "Further Development Of The $ASCN Ecosystem ",
            ],
          },
        ]}
        id="roadmap"
      />
    </>
  );
};

export default Roadmap;
