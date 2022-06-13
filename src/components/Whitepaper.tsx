import Header from "./Header";
import diagram from "../images/diagram.png";
import Button from "@mui/material/Button";

const Whitepaper: React.FC = () => {

  function handleClick(id: any) {
    const elem = document.getElementById(id);
    //console.log(elem);

    if (elem) {
      window.scrollTo(0, elem.offsetTop - 60)
    }
  }

  return (
    <div className="whitepaper">
      <div className="main--container">
        <Header />
        <h1>Whitepaper v1.0</h1>

        <nav className="whitepaper-tabs">
          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('summary')}>Summary</Button>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('mission')}>Mission</Button>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('roadmap')}>Roadmap</Button>
            <div className="whitepaper-tabs--item--dropdown">
              <li>
                <Button onClick={() => handleClick('ancestral')}>Ancestral Stage</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('evolved')}>Evolved Stage</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('ascended')}>Ascended Stage</Button>
              </li>
            </div>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('fundamentals')}>Game Fundamentals</Button>
            <div className="whitepaper-tabs--item--dropdown">
              <li>
                <Button onClick={() => handleClick('islands')}>Islands</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('harvesting')}>Resource Harvesting</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('crafting')}>Crafting</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('vendor')}>Vendor</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('wpb')}>World Pollution Bar</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('banking')}>Banking</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('trading')}>External Sales/Trading</Button>
              </li>
            </div>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('tokenomics')}>Tokenomics</Button>
            <div className="whitepaper-tabs--item--dropdown">
              <li>
                <Button onClick={() => handleClick('token')}>$ASCN Token</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('chains')}>Plasma Chains</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('distribution')}>Token Distribution</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('launch')}>Launch Tokenomics</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('balancing')}>In-Game Balancing</Button>
              </li>
              <li>
                <Button onClick={() => handleClick('fees')}>Fees</Button>
              </li>
            </div>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('community')}>Community</Button>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('team')}>Teams</Button>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('support')}>Support</Button>
          </li>

          <li className="whitepaper-tabs--item">
            <Button onClick={() => handleClick('links')}>Trusted Links</Button>
          </li>
        </nav>

        <h2 id="summary">Ascension Ecoverse Summary:</h2>
        <p>
          Ascension Ecoverse is a play-to-own crypto game that combines
          real-time strategy game mechanics with the power of the blockchain,
          ensuring that everything you collect, craft, and discover is stored on
          the Polygon blockchain. Throughout the course of the game, players
          will work their way from harvesting the resources on their individual
          islands to working together to building the cities and technologies of
          the future.
        </p>
        <p>
          Within the game, players have to harvest, collect, discover, and trade
          for the materials they need to craft NFTs to evolve in Ascension
          Ecoverse. This not only ensures that players have to work for
          evolution, but that they will be part of a thriving blockchain economy
          that provides numerous opportunities for players to turn their in-game
          grind into income.
        </p>

        <h2 id="mission">Our Mission:</h2>
        <p>
          At the core of this project are innovators that have a love for
          gaming, the blockchain, and environmental sustainability. Throughout
          the development of the Ascension project, we’re aiming to create a
          purpose-driven game – one that serves to educate and inform players of
          ways to improve the sustainability of our ecosystems, all while
          providing a high-level play-to-own gaming experience. We know that
          this is a tough task, but we believe that our project could be the
          start of something much larger – a true blockchain revolution in every
          industry, with sustainability at its forefront.
        </p>

        <h2 id="roadmap">Roadmap:</h2>
        <p>
          In a rapidly growing market like blockchain gaming, we need to be
          ready to adapt at any moment. Accordingly, as the Ascension team
          shoots for new heights within the world of cryptocurrency, this
          roadmap will be updated regularly to reflect the goals, achievements,
          aspirations, and visions for the future of the Ascension token, game,
          and ecosystem.
        </p>
        <p>Last Updated: April 7th, 2022</p>
        <h3 id="ancestral">Ancestral Stage:</h3>
        <p>
          The Ancestral Stage marks the beginning of the Ascension project, and
          thus, contains the necessary steps to cement Ascension as a long-term
          project in the cryptocurrency space. The steps taken in the Ancestral
          Stage are as follows:
        </p>
        <ul>
          <li>
            $ASCN Whitepaper V1 & Ascension Ecoverse Technical Blueprints
            Released
          </li>
          <li>$ASCN Initial Token Launch On QuickSwap</li>
          <li>Series 1 Major Element Land NFT Launch</li>
        </ul>
        <p>
          The steps following the initial project setup will be focused on
          growing, maintaining, and rewarding our community. With fiat on-ramp
          integration for ease of access, as well as token staking and
          community-only NFTs to reward our biggest supporters, the Ascension
          team ensures that the project’s community remains a priority through
          the Ancestral Stage.
        </p>
        <ul>
          <li>Initial Ascension Ecoverse Gameplay Mechanics Revealed</li>
          <li>Ascension Ecoverse Game Demo (Alpha) Launched</li>
        </ul>
        <p>
          The final steps in the Ancestral Stage are focused on the development
          of the Ascension Ecoverse game itself. All of the work to establish
          blockchain product offerings and develop a community is worthless
          without the use case that we aim to provide. By revealing sneak peeks
          and videos of the gameplay mechanics and following it up with our
          Ascension Ecoverse game demo, we guarantee a long-term use case for
          our products and solidify the Ascension project in the world of
          crypto.
        </p>

        <h3 id="evolved">Evolved Stage:</h3>
        <p>
          The Evolved Stage represents the midpoint of the Ascension project,
          where we continue to strive to build out exciting new game mechanics
          and foster an even larger project community to prepare for the game
          launch of a lifetime!
        </p>
        <ul>
          <li>$ASCN Token Listing On KuCoin, CoinMarketCap, and CoinGecko</li>
        </ul>
        <p>
          Picking up where we left off in our previous stage, the community is
          still a major focus during the Evolved Stage, as we plan to implement
          steps to ensure that early adopters of the project have the most to
          gain from our future plans. During the Evolved stage, we plan to
          complete CEX listings on multiple exchanges, increasing the number of
          eyes on the project, and making it easier than ever for investors to
          purchase $ASCN. In turn, this rewards early investors as more players
          flock to the game, helping to create a more robust in-game ecosystem
          with more opportunities for player competition, collaboration, and
          earning.
        </p>
        <ul>
          <li>$ASCN Partnership Program Launched</li>
          <li>First Round Equity Funding Completed</li>
          <li>Limited Partnership NFTs Released</li>
        </ul>
        <p>
          On the corporate side of the project, we’ll be looking to take the
          Ascension Ecoverse game mainstream with partnerships and equity
          funding, pushing our development to new heights. The Ascension
          Ecoverse team wants to ensure that we have a solid corporate base to
          help solidify our future goals and continue pushing towards the launch
          of the Ascension Ecoverse Alpha.
        </p>
        <ul>
          <li>Ascension Ecoverse Game Demo Quests Released</li>
          <li>In-House NFT Marketplace Released</li>
          <li>Vehicles, Gear & Peripherals NFT Pack Drops</li>
          <li>Series 2 Special Element Land NFT Launch</li>
          <li>Ascension Ecoverse Game Beta Launched</li>
        </ul>
        <p>
          As always, this is a gaming project, which means that we’re constantly
          making changes to improve the game and the player experience at every
          chance we get. During the Evolved Stage, we’ll roll out quests for the
          game demo, helping players obtain even more value from their gameplay
          experience. Alongside quests, we’ll be launching several NFT
          initiatives that will add to the complexity of the game ecosystem and
          the overall player experience. We’ll be building out an in-house NFT
          marketplace to improve the buying and selling experience for players
          looking to profit off their creations, as well as dropping NFTs that
          make in-game actions even easier than before. Additionally, the
          Ascension team will be launching a whole new series of land NFTs with
          new traits! This is something that the team is really excited about,
          as it will add complexity and a whole new variety of gameplay
          strategies to the Ascension Ecoverse. Finally, we’ll be releasing the
          beta of the Ascension Ecoverse game, which will allow a limited number
          of players to act as beta testers, where they’ll get off their island
          and explore the Ascension Ecoverse.
        </p>

        <h3 id="ascended">Ascended Stage:</h3>
        <p>
          The Ascended Stage signifies the point where the project reaches its
          greatest heights and then breaks past them. At this point in the
          project, we’ll be working to further decentralize the Ascension
          Ecoverse game, while actively looking to expand the Ascension
          ecosystem in a manner that contributes to the planet’s environment.
        </p>
        <ul>
          <li>Ascension Ecoverse Full Game Launch</li>
          <li>Ascension Ecoverse Holiday Events, Contests & Tournaments</li>
        </ul>
        <p>
          As always, we’ll be making developments to the game throughout every
          stage of the roadmap. In the Ascended stage, we’ll be releasing the
          Ascension Ecoverse game to the public, ensuring that people across the
          world can start their journey to ascension! Additionally, we’ll be
          implementing holiday events, contests, and tournaments into the game
          structure, giving players the opportunity to win tokens, NFTs, and
          real-life prizes!
        </p>
        <ul>
          <li>$ASCN Cross-Chain Integration</li>
          <li>Decentralized $ASCN Player DAO</li>
          <li>$ASCN Token Holder Game Launchpad</li>
        </ul>
        <p>
          With the Ascension Ecoverse Alpha launched and less control required
          by the team, we want to give back to the community in some incredible
          ways; cross-chain integration, control of their playing experience, as
          well as guidance and the opportunity to build a blockchain game of
          their own. To add more depth to the in-game experience, we will be
          implementing cross-chain integration, allowing players on multiple
          major blockchains to access Ascension Ecoverse seamlessly, and open up
          a world of possibilities where assets from other crypto games can be
          used in Ascension. Additionally, the Ascension team will be
          implementing a $ASCN Player DAO, which will give community members the
          ability to submit proposals to the DAO. The DAO will then vote on the
          proposals, and if they are accepted, the Ascension team will implement
          the changes, giving players complete control of their experience.
          Finally, the Ascension team will be running a game launchpad for $ASCN
          token holders, where we will be providing guidance on how to ideate
          and create blockchain games with the goal of assisting the next
          generation of developers make their blockchain vision a reality.
        </p>
        <ul>
          <li>Carbon Credit Partnership & Integration</li>
          <li>Further Development Of The $ASCN Ecosystem</li>
        </ul>
        <p>
          Finally, as control of the Ascension Ecoverse is handed over to
          players, the Ascension team will shift their focus to furthering our
          environmental goals through the blockchain. We’ll be looking to
          partner with a Carbon Credit organization and integrate it into the
          Ascension Ecoverse game as our final act of control, turning the game
          into one that is truly environmentally friendly. Once the integration
          has been completed, we’ll be working to develop the $ASCN ecosystem in
          whatever way is most beneficial for the planet!
        </p>

        <h2 id="fundamentals">Game Fundamentals: </h2>
        <h3 id="islands">Islands:</h3>
        <p>
          The Ascension Island NFTs are a core game mechanic that greatly
          impacts how each player’s gameplay. It should be noted that in order
          to play Ascension Ecoverse, players will need to purchase an Island
          NFT, either in a drop or via the secondary market. The islands will
          impact each player’s game experience in two distinct ways.
        </p>
        <h4>Resources:</h4>
        <p>
          Your island is your home and is meant to simulate your own little
          piece of planet Earth. It will be home to everything that you need to
          survive, including renewable and non-renewable resources.
        </p>
        <p>
          Renewable resources like stone, wood, water, and grass can be
          harvested from your island. These resources act as cornerstone
          building blocks for everything that you choose to craft in the game.
          Additionally, renewable resources like fish and seeds can be found all
          across your island, providing you with a viable means of income. All
          renewable resources will regenerate within specific parameters of
          time, meaning that you’ll always have them available if you time your
          harvesting periods correctly. But beware, harvest them too quickly,
          and you’ll be without them for extended periods of time!
        </p>
        <p>
          Once you’ve harvested a renewable resource from your island, you’ll
          have a few different usage options:
        </p>
        <ul>
          <li>
            Crafting: Your renewable resources can be used to build in-game
            items that are registered on the blockchain as NFTs. These items can
            then be used to accomplish in-game functions or can be sold on an
            external NFT marketplace.
          </li>
          <li>
            Sales: At some point, you’ll want to earn some additional $ASCN
            because this is a P2O game after all! Any of the renewable resources
            that you harvest can be sold to a vendor found on your island, but
            certain items hold more value than others. It’s up to you to find a
            profit-maximizing strategy! Additionally, these resources can also
            be sold to other players on an external NFT marketplace.
          </li>
          <li>
            Trading: Renewable resources that you harvest can also be swapped
            amongst other players in the game via an online trading mechanism,
            allowing you to address any resource deficiencies in a collaborative
            way!
          </li>
        </ul>
        <p>
          Coal and oil are non-renewable resources that can be found on select
          islands. As their name suggests, these resources will not regenerate
          at any point in time, and each player will receive a fixed supply.
          These resources can only be used to craft items or traded with other
          players, and cannot be sold to the vendor. Be careful with how you use
          them, as there is a fixed supply across the entire game, and running
          out too early could be detrimental to your success!
        </p>
        <p>
          Finally, every time you harvest resources, you will contribute to the
          Worldwide Pollution Bar, which we will touch on later.
        </p>
        <h4>Traits:</h4>
        <p>
          Based on random chance, some islands will have special characteristics
          that provide the user with additional resources. When players first
          mint an Ascension Island NFT, they will have a 40% chance of minting
          an island with a trait. The chance of minting an island with a trait
          will decrease with each consecutive NFT island release. The whole list
          of special islands, their respective resource increases, and the
          percentage chance associated with each trait can be found below.
        </p>
        <table>
          <tr>
            <th>Trait</th>
            <th>Resource Boost</th>
            <th>Chance</th>
          </tr>
          <tr>
            <td>Forest</td>
            <td>Wood</td>
            <td>42%</td>
          </tr>
          <tr>
            <td>Quarry</td>
            <td>Stone</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Wetlands</td>
            <td>Grass & Water</td>
            <td>18%</td>
          </tr>
          <tr>
            <td>Lakeside</td>
            <td>Fish</td>
            <td>6%</td>
          </tr>
          <tr>
            <td>Mine</td>
            <td>Coal</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>Oil Fields</td>
            <td>Oil</td>
            <td>1%</td>
          </tr>
        </table>
        <p>
          Please remember that these are CONTINGENT PROBABILITIES. They only
          come into play IF you’re only of the lucky 40% that mints an island
          with a trait.
        </p>
        <p>
          Additionally, these island traits are only available for Series 1
          Ascension Land NFTs, meaning that once the Series 1 NFTs have all been
          minted, these traits will no longer be available in upcoming NFT
          releases. This decision was made to reward the initial adopters of the
          project, and to create a variety of different playstyles and
          strategies with the upcoming traits in the Series 2 release!
        </p>
        <h3 id="harvesting">Resource Harvesting:</h3>
        <p>
          Everyone knows that in order to successfully complete your journey to
          ascension, you need to harvest resources to craft tools and generate
          income!
        </p>
        <p>
          As mentioned in the Islands section, each island comes stocked full of
          resources for players to harvest. Items like wood, stone, grass,
          seeds, fish, and water will all be readily available for you to
          harvest and start your journey! Meanwhile, lucky players will also
          encounter deposits of coal and oil on their islands, giving them a leg
          up from day one. From that point forward, your seeds will need to be
          planted to start generating income, and the remainder of your
          resources can be sold or crafted into tools.
        </p>
        <p>
          A large portion of your resource harvesting will revolve around
          farming, especially in the early stages of the game, which is why
          seeds can be harvested as a renewable resource. Each seed you harvest
          can be planted in an area of empty land, where it will grow into one
          of the four crop options based on random chance associated with the
          sales price of the crop. This mechanic was built to help players begin
          their Ascension Ecoverse journey with a sustainable source of income,
          which can be reinvested into additional seeds, tools, or other
          resources for more profit! Just remember, growing crops need to be
          watered once a day, and failure to do so will result in their death.
        </p>
        <p>
          Additionally, each renewable resource harvested will regenerate on
          your island after a given period of in-game time, while non-renewable
          resources come in a fixed supply. Crops act as non-renewable resources
          and will not regenerate, but they can be replanted with the seeds
          found on the island or purchased from the Vendor. It’s up to each
          player to determine their optimal harvesting strategy to maximize
          their crafting abilities and profit margins!
        </p>
        <p>
          Below is a list of all the possible resources that can be harvested,
          along with their in-game harvest and regeneration times. This list
          will be updated with each in-game resource update, ensuring that
          Ascension Ecoverse will maintain a wide variety of resource harvesting
          strategies.
        </p>
        <table>
          <tr>
            <th>Interact With</th>
            <th>Resource Harvested</th>
            <th>Harvest Time</th>
            <th>Regeneration/Growing Time</th>
            <th>Tool Boost</th>
            <th>Boosted Harvest Time</th>
            <th>Boosted Regeneration/Growing Time</th>
          </tr>
          <tr>
            <td>Tree</td>
            <td>Wood</td>
            <td>10 Minutes</td>
            <td>30 Minutes</td>
            <td>Axe</td>
            <td>3 Minutes & 20 Seconds</td>
            <td>10 Minutes</td>
          </tr>
          <tr>
            <td>Rock</td>
            <td>Stone</td>
            <td>15 Minutes</td>
            <td>55 Minutes</td>
            <td>Pickaxe</td>
            <td>5 Minutes</td>
            <td>18 Minutes & 20 Seconds</td>
          </tr>
          <tr>
            <td>Tall Grass</td>
            <td>Grass</td>
            <td>30 Seconds</td>
            <td>2 Minutes & 30 Minutes</td>
            <td>Scythe</td>
            <td>10 Seconds</td>
            <td>50 Seconds</td>
          </tr>
          <tr>
            <td>Tall Grass</td>
            <td>Seeds</td>
            <td>30 Seconds</td>
            <td>19 Minutes & 30 Seconds</td>
            <td>Scythe</td>
            <td>10 Seconds</td>
            <td>6 Minutes & 30 Seconds</td>
          </tr>
          <tr>
            <td>Lake/Ocean/River</td>
            <td>Water</td>
            <td>20 Seconds</td>
            <td>40 Seconds</td>
            <td>Bucket</td>
            <td>6.67 Seconds</td>
            <td>13.33 Seconds</td>
          </tr>
          <tr>
            <td>Lake/Ocean/River</td>
            <td>Fish</td>
            <td>30 Minutes</td>
            <td>60 Minutes</td>
            <td>Rod</td>
            <td>10 Minutes</td>
            <td>20 Seconds</td>
          </tr>
          <tr>
            <td>Large Rock</td>
            <td>Coal</td>
            <td>6 Minutes & 40 Minutes</td>
            <td>N/A</td>
            <td>Large Pickaxe</td>
            <td>2 Hours, 13 Minutes & 20 Seconds</td>
            <td>N/As</td>
          </tr>
          <tr>
            <td>Oil Sands</td>
            <td>Oil</td>
            <td>16 Minutes & 40 Seconds</td>
            <td>N/A</td>
            <td>Large Bucket</td>
            <td>5 Hours, 33 Minutes & 20 Seconds</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Wheat</td>
            <td>Wheat</td>
            <td>5 Minutes</td>
            <td>20 Minutes</td>
            <td>Scythe</td>
            <td>1 Minute & 40 Seconds</td>
            <td>6 Minutes & 40 Seconds</td>
          </tr>
          <tr>
            <td>Carrot</td>
            <td>Carrot</td>
            <td>10 Minutes</td>
            <td>40 Minutes</td>
            <td>N/A</td>
            <td>3 Minutes & 20 Seconds</td>
            <td>13 Minutes & 20 Seconds</td>
          </tr>
          <tr>
            <td>Cabbage</td>
            <td>Cabbage</td>
            <td>20 Minutes</td>
            <td>1 Hour & 20 Minutes</td>
            <td>N/A</td>
            <td>6 Minutes & 40 Seconds</td>
            <td>26 Minutes & 40 Seconds</td>
          </tr>
          <tr>
            <td>Pumpkin</td>
            <td>Pumpkin</td>
            <td>24 Minutes</td>
            <td>1 Hour & 36 Minutes</td>
            <td>N/A</td>
            <td>8 Minutes</td>
            <td>32 Minutes</td>
          </tr>
        </table>
        <h3 id="crafting">Crafting:</h3>
        <p>
          Once you’ve harvested resources, use them to craft items that you can
          use to boost your in-game processes, or sell/trade them for profit!
        </p>
        <p>
          Each item that you craft in the Ascension Ecoverse game can be used to
          assist in-game actions or can be exchanged with other Ascension
          Ecoverse players and entities. To start crafting items, you’ll need to
          build a workbench, which serves as the base for crafting all other
          items. The workbench can be crafted using 5 units of wood and is the
          only item that can be crafted for free.
        </p>
        <p>
          Once you’ve built the workbench, you can start to craft any other item
          currently available in the game, which will require resources, a fee,
          and in-game crafting time. The resources, fees, and crafting time for
          each respective resource can be found in the chart below. Once again,
          players will have to determine their optimal profit strategy in
          regards to their harvesting and crafting approach!
        </p>
        <table>
          <tr>
            <th>Crafted Item</th>
            <th>Required Resources</th>
            <th>Crafting Fee (in $ASCN tokens)</th>
            <th>Crafting Time</th>
          </tr>
          <tr>
            <td>Crafting Bench</td>
            <td>5 Wood</td>
            <td>N/A</td>
            <td>2 Minutes</td>
          </tr>
          <tr>
            <td>Twine</td>
            <td>2 Grass</td>
            <td>3,000</td>
            <td>3 Minutes</td>
          </tr>
          <tr>
            <td>Chest</td>
            <td>5 Wood</td>
            <td>2,500</td>
            <td>15 Minutes</td>
          </tr>
          <tr>
            <td>Axe</td>
            <td>2 Wood, 1 Stone, 2 Twine</td>
            <td>7,500</td>
            <td>30 Minutes</td>
          </tr>
          <tr>
            <td>Pickaxe</td>
            <td>2 Wood, 3 Stone, 3 Twine</td>
            <td>9,428.60</td>
            <td>40 Minutes</td>
          </tr>
          <tr>
            <td>Large Pickaxe</td>
            <td>3 Wood, 6 Stone, 3 Twine</td>
            <td>1,597,500</td>
            <td>3 Hours</td>
          </tr>
          <tr>
            <td>Scythe</td>
            <td>2 Wood, 2 Stone, 3 Twine</td>
            <td>12,000</td>
            <td>45 Minutes</td>
          </tr>
          <tr>
            <td>Bucket</td>
            <td>4 Wood, 4 Twine</td>
            <td>1,200</td>
            <td>10 Minutes</td>
          </tr>
          <tr>
            <td>Large Bucket</td>
            <td>8 Wood, 8 Twine</td>
            <td>6,900,,000</td>
            <td>4 Hours & 30 Minutes</td>
          </tr>
          <tr>
            <td>Fishing Rod</td>
            <td>3 Wood, 5 Twine</td>
            <td>16,200</td>
            <td>1 Hour & 15 Minutes</td>
          </tr>
          <tr>
            <td>Fire</td>
            <td>5 Wood, 1 Coal</td>
            <td>1,067,500</td>
            <td>1 Hour</td>
          </tr>
          <tr>
            <td>Twine</td>
            <td>3 Wood, 1 Oil, 1 Fire</td>
            <td>11,501,500</td>
            <td>1 Hour & 30 Minutes</td>
          </tr>
        </table>
        <p>
          Currently, the items that can be crafted in are limited, but the list
          will be updated with each in-game resource update, resulting in larger
          numbers of crafting combinations and items.
        </p>
        <h3 id="vendor">The Vendor:</h3>
        <p>
          Looking to cash out on your latest crop harvest, or want to reinvest
          some of your profits? The Vendor is your island’s go-to for buying and
          selling resources!
        </p>
        <p>
          Any time you want to purchase or sell resources without getting other
          players involved, the Vendor is the best way to do so. The Vendor
          lives on your island and provides you with an opportunity to buy and
          sell every in-game resource. Simply talk with the Vendor, select the
          ‘Buy/Sell’ option that pops up, and take a look at what they have to
          offer. The full list of sales and purchase prices for each resource
          can be found below.
        </p>
        <table>
          <tr>
            <th>Resource (One Unit)</th>
            <th>Sales Price (In $ASCN Tokens)</th>
            <th>Purchase Price (in $ASCN tokens)</th>
          </tr>
          <tr>
            <td>Wood</td>
            <td>500</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>Stone</td>
            <td>1,100</td>
            <td>2,200</td>
          </tr>
          <tr>
            <td>Seeds</td>
            <td>400</td>
            <td>800</td>
          </tr>
          <tr>
            <td>Grass</td>
            <td>15</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Fish</td>
            <td>2,430</td>
            <td>4,860</td>
          </tr>
          <tr>
            <td>Coal</td>
            <td>1,065,000</td>
            <td>2,130,000</td>
          </tr>
          <tr>
            <td>Oil</td>
            <td>11,500,000</td>
            <td>23,000,000</td>
          </tr>
          <tr>
            <td>Wheat/Wheat Seeds</td>
            <td>500</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>Carrots/Carrot Seeds</td>
            <td>1,600</td>
            <td>3,200</td>
          </tr>
          <tr>
            <td>Cabbage/Cabbage Seeds</td>
            <td>4,500</td>
            <td>9,000</td>
          </tr>
          <tr>
            <td>Pumpkin/Pumpkin Seeds</td>
            <td>7,000</td>
            <td>14,000</td>
          </tr>
        </table>
        <p>
          As you can see, the prices are set up so that purchase prices are much
          higher than sale prices for items that you can harvest, and sale
          prices are much higher than purchase prices for items that you cannot
          harvest. This ensures that players do not use the Vendor for the
          purposes of arbitrage and simultaneously encourages players to harvest
          resources whenever they get the chance.
        </p>
        <p>
          Additionally, the Vendor is also capable of brokering trades with
          other players on your behalf, which is discussed in detail later on in
          the whitepaper.
        </p>
        <h3 id="wpb">Worldwide Pollution Bar:</h3>
        <p>
          The Worldwide Pollution Bar (WPB) is a unique game mechanic that helps
          to set us apart from other games in the space. It helps to create a
          true “real-life” experience by reminding each player that their
          actions have consequences, as well as promoting environmentalism and
          environmentally friendly practices.
        </p>
        <p>
          Almost every in-game action that a player takes will have an effect on
          the WPB, good or bad. Unsustainable actions like excessive resource
          harvesting will have negative effects on the WPB, while sustainable
          actions like planting trees will have positive effects on the WPB. An
          example of actions and their effects on the WPB can be found below,
          and the list will be updated as we move closer to the release date for
          the Ascension Ecoverse demo.
        </p>
        <img src={diagram} alt="Flow Diagram" />
        <p>
          As a means of encouraging players to engage in environmentally
          friendly actions, the WPB will have adverse effects on the climate of
          the Ascension Ecoverse. As the level of the WPB rises, so will the
          temperature, making it increasingly difficult for players to plant and
          harvest their crops, all while increasing the likelihood of natural
          disasters ravaging their islands! This forces players to work
          collaboratively to achieve a production level that won’t raise the WPB
          or to adopt sustainable techniques that allow players to increase
          production without harming the climate.
        </p>
        <h3 id="banking">Banking:</h3>
        <p>
          The in-game banking mechanic allows players to stake their tokens for
          a set period of time to increase the locked liquidity of the game
          tokens. In exchange, the Ascension Ecoverse project provides players
          with large returns using a hybrid method of staking that provides
          stakers with rewards from both a Polygon liquidity pool and the
          Ascension Ecoverse project itself.
        </p>
        <p>
          As mentioned previously, players will be rewarded by adding to a
          liquidity pool, as well as via rewards tokens that the project has
          deliberately set aside for this purpose. To successfully access
          staking rewards, players must first add their $ASCN tokens to the
          ASCN/MATIC pair on QuickSwap or UniSwap. Doing so will reward players
          with ASCN/MATIC LP tokens, which can then be deposited at the bank for
          players to start earning standard LP provision rewards. The rewards
          that players earn will be proportionate to the amount of LP tokens
          staked. Players will be able to withdraw their LP tokens and claim
          their rewards at any time.
        </p>
        <p>
          However, because this is a hybrid model, players will also have the
          ability to earn rewards that the Ascension team has set aside solely
          for this purpose. To earn these rewards, players will need to keep
          their tokens staked for a minimum of 30 days, after which they will
          start earning bonus rewards. These bonus rewards will be paid out of
          the 225,000,000,000 tokens that the team has set aside for staking
          rewards, and rewards will be paid out on the first of each month for
          everyone that has had their tokens staked for over 30 days. These
          staking rewards will be replenished regularly, with 50% of our in-game
          fees contributing to staking rewards. These fees are discussed in
          detail later in the whitepaper.
        </p>
        <p>
          In order to complete the in-game staking process, players will enter
          the bank, and select the option to ‘Deposit LP Tokens.’ From there, a
          pop-up will appear that allows players to select the amount of
          ASND/MATIC LP tokens they wish to deposit, as well as the period of
          time for which the player wishes to stake their tokens. Once the
          player has decided on their staking amount and time, the player will
          confirm the staking by accepting the in-game confirmation, as well as
          their wallet’s confirmation. At the end of their staking period, the
          player will receive a visual notification over the bank. When they
          enter the bank, the player will be able to select the option to
          ‘Withdraw LP Tokens,’ at which point they will be able to withdraw
          their staked LP tokens and their staking rewards.
        </p>
        <p>
          Finally, although staking $ASCN tokens at this point in time only
          provides those who choose to stake their tokens with a financial
          reward, the Ascension team is working hard to develop in-game benefits
          for those who stake their $ASCN tokens. As any additional use cases
          for staked tokens are proposed or implemented, the whitepaper will be
          updated accordingly.
        </p>
        <h3 id="trading">External Sales/Trading:</h3>
        <p>
          If you’re not satisfied with what the Vendor is offering, try working
          with your fellow players to get the resources that you need!
        </p>
        <h4>External Sales:</h4>
        <p>
          Using the power of the blockchain, all islands, resources, and crafted
          items will be stored and registered to each individual player, meaning
          that players can sell them as NFTs. Not only does this provide players
          with another opportunity to profit from their in-game actions, but it
          adds to the complexity of the Ascension Ecoverse ecosystem. Players
          will always have a way of obtaining the resources and tools they need
          if they’re willing to pay the right price, and players can derive a
          variety of strategies to ensure that they maximize their profit!
        </p>
        <p>
          As of right now, there is no official Ascension Ecoverse NFT
          marketplace, although we are working on developing one for the future
          stages of the project. This means that all Ascension Ecoverse NFTs are
          currently listed on OpenSea, and the link to them can be found in our
          Trusted Links section. Additionally, Ascension Ecoverse takes a 2% fee
          on each marketplace transaction of the Ascension Ecoverse NFTs.
        </p>
        <h4>P2P Trading:</h4>
        <p>
          Even though the Vendor might not have what you’re looking to purchase
          with him, he can still help you out by brokering trades with other
          players on your behalf. When you talk with the Vendor, you can select
          the option to ‘Trade’ instead of choosing to ‘Buy/Sell.’ This will
          open up a page with trade requests from other players. From there, you
          have two options:
        </p>
        <ul>
          <li>
            Accept a Trade Request: If you choose to accept a trade request, you
            are agreeing to the terms of a trade submitted by another player.
            You will be asked to confirm the trade twice, once by the game
            itself, and another time by your wallet. Once you have acknowledged
            both of those confirmations, a small fee will be deducted
            automatically from your in-game token stash, and your trade will be
            processed.
          </li>
          <li>
            Submit a Trade Request: If you choose to submit a trade request, it
            typically means that you are unsatisfied with the other trade
            requests on the market. When submitting a trade request, you will be
            asked to make your confirmations in advance, which prevents any
            delay in the swap when another player chooses to accept your trade
            request. Once you have acknowledged the confirmations, your trade
            will be recorded with the Vendor. If someone chooses to acknowledge
            your trade request, a small fee with be deducted automatically from
            your in-game token stash, and your trade will be processed.
          </li>
        </ul>

        <h2 id="tokenomics">Tokenomics:</h2>
        <h3 id="token">The $ASCN Token:</h3>
        <p>
          The $ASCN token is the driving force behind this entire project, as it
          acts as the in-game token for the Ascension Ecoverse game, as well as
          the token for our IDO. The $ASCN token is hosted on the Polygon
          network, due to several benefits that the Polygon network provides. We
          want to ensure that the game is an enjoyable experience for each and
          every player, and we believe that Polygon is the best place to create
          it.
        </p>
        <p>
          The decision to use the Polygon network was based on the following
          three main reasons, all of which we believe can make or break the
          experience of a P2O crypto game:
        </p>
        <ul>
          <li>
            Speed: When players need to complete transactions as a part of a
            game, they should be completed as instantaneously as possible to
            enhance the in-game experience, and the Polygon network provides the
            speed required for our game. Polygon has an average transaction
            speed of 2.1 seconds, ensuring that players can perform in-game
            actions and transactions as fast as possible.
          </li>
          <li>
            Security: A key fundamental of a P2O game is that players own the
            assets that they build and earn in the game, which makes security
            paramount when choosing a network. Players should be able to create,
            trade, and earn assets with no underlying fear of their assets being
            compromised, and the Ascension team believes that Polygon has strong
            security features in place to meet our security requirements. The
            Ascension Ecoverse game will run on Polygon’s plasma security
            system, which will utilize Ethereum’s security protocols. In
            essence, this means that users will only ever be at risk if the
            Ethereum network fails, helping us achieve stronger security and low
            fees simultaneously. Polygon provides the Ascension team with the
            ability to create our own plasma chains that run alongside the
            network as an added security feature, which are discussed in detail
            in the following section.
          </li>
          <li>
            Gas Fees: In a game that requires players to complete a large number
            of transactions to be successful, both within the game itself and
            with other players, a network that keeps gas fees minimal is key.
            The Polygon network has an average transaction price of anywhere
            between $0.1-0.5 USD, allowing players to make numerous transactions
            without worrying about losing their hard-earned profits to gas fees.
            Plus, as mentioned above, the Polygon network provides the Ascension
            team with the ability to create plasma chains, where our goal is to
            create a consensus mechanism that ensures no gas fees, creating a
            gaming experience where the focus remains on the game itself, not
            the gas fees required to play.
          </li>
        </ul>
        <p>
          Additionally, a major reason that the Ascension team selected the
          Polygon network for this project is their latest environmental
          initiative – The Green Manifesto. As of April 12, 2022, Polygon has
          stated that they plan to be carbon-negative by the end of 2022 through
          a partnership with KlimaDAO, as well as pledging $20 million to
          funding for projects that utilize technology to combat climate change.
          As a project whose end goals revolve around environmental impact
          through technology, we felt as though it was only right to utilize a
          network that plans to be carbon-negative, ensuring that our project
          would not harm the environment as we seek to build tools to help it.
        </p>
        <a href="https://blog.polygon.technology/polygon-is-going-carbon-negative-in-2022-with-a-20-million-pledge/">
          Read more about Polygon’s Green Manifesto here.
        </a>
        <p>
          Furthermore, Polygon has taken many steps to ensure that their network
          remains a hotbed for the future of blockchain gaming, starting with
          the formation of Polygon Studios, Polygon’s gaming arm. From that
          point forward, Polygon Studios has orchestrated multiple strategic
          partnerships to help further gaming initiatives like eSports
          competitions, as well as dedicated $100 million to investments in NFT
          gaming projects. Clearly, Polygon is committed to furthering the
          development of blockchain gaming, aiding in the decision to build the
          Ascension Ecoverse project on the Polygon network. Combined with the
          necessary features and the environmental initiatives, Polygon’s
          commitment to blockchain gaming was the final piece necessary to
          commit our project to the Polygon blockchain.
        </p>
        <p>
          Finally, although the $ASCN token is currently hosted on the Polygon
          network, the Ascension team has future plans to introduce cross-chain
          functionality to expand the access to the Ascension Ecoverse game. The
          exact details of which networks will be part of the expansion are
          unknown at this time, as they will be determined based on community
          recommendations and team decisions. As the Ascension team gets a
          clearer idea of which networks will be part of the expansion, this
          section of the whitepaper will be updated with additional details.
        </p>
        <h3 id="chains">Plasma Chains:</h3>
        <p>
          Another benefit of using Polygon as the blockchain behind the $ASCN
          token is the ability to create plasma chains, which is what the
          Ascension Ecoverse project uses to ensure that users’ in-game assets
          remain as secure as possible, without resulting in slow transaction
          speeds or high gas fees.
        </p>
        <p>
          Plasma chains are similar to sidechains in the sense that many of
          their features are the same: they both act as separate blockchains
          that run alongside a main blockchain (in this case, Polygon) and
          communicate with each other via a smart contract. Each sidechain or
          plasma chain also uses their own consensus mechanism, resulting in gas
          fees and transaction speeds that can essentially be engineered at the
          whim of the developer. However, plasma chains don’t experience the
          same security issues as sidechains, making them the perfect vessel for
          in-game transactions and NFT minting.
        </p>
        <p>
          Sidechains are typically less secure than the main chain, due to the
          fact that there are less miners keeping the chain secure. This issue
          can be solved with a plasma chain, as they use a system that keeps the
          plasma chain as secure as the main consensus mechanism, by publishing
          block roots generated by the plasma consensus mechanism to the main
          chain. As mentioned earlier in the whitepaper, this essentially means
          that users’ funds and assets will only ever be at risk if the main
          chain (Polygon) fails. Plus, by using Polygon’s consensus mechanism
          and their plasma security, our plasma chain will be indirectly
          connected to Ethereum’s security protocols.
        </p>
        <p>
          As a result, the Ascension team believes that utilizing a plasma chain
          for this project is the optimal approach to provide asset security
          while keeping transaction costs as low as possible. The plasma chain
          will be a major focus of development over the next few months, and
          more specifics about how ours will work will be added to the
          whitepaper as development progresses.
        </p>
        <p>
          For a more detailed breakdown on plasma chains and how they work,{" "}
          <a href="#TODO">check out this article.</a>
        </p>
        <h3 id="distribution">Token Distribution:</h3>
        <p>
          At the time of the IDO, the Ascension team will distribute 1 trillion
          tokens (1,000,000,000,000) among the following wallets with the
          following use cases:
        </p>
        <table>
          <thead>
            <tr>
              <th>Allocation</th>
              <th>Total Allocated</th>
              <th>% Of Total</th>
              <th>Unlock Schedule</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ascension Tokens</td>
              <td>150,000,000,000</td>
              <td>15%</td>
              <td>
                Locked at launch for a minimum of 2 years. May be relocked after
                a discussion with the Ascension community.
              </td>
              <td>
                Ascension tokens will be used to pay core team members for their
                work on the project.
              </td>
            </tr>
            <tr>
              <td>P2E Rewards</td>
              <td>225,000,000,000</td>
              <td>22.5%</td>
              <td>Locked at launch. Issuance will start in Q4 of 2022.</td>
              <td>
                P2E tokens will be used to reward players for their in-game
                actions.
              </td>
            </tr>
            <tr>
              <td>Staking Rewards</td>
              <td>225,000,000,000</td>
              <td>22.5%</td>
              <td>Locked at launch. Issuance will start in Q3 of 2022.</td>
              <td>
                Staking Reward tokens will be used to reward players for staking
                their tokens to increase the locked liquidity in the project.
              </td>
            </tr>
            <tr>
              <td>Air Drops</td>
              <td>20,000,000,000</td>
              <td>2%</td>
              <td>Linear release from the time of the IDO.</td>
              <td>
                Air Drop tokens will be used for community marketing
                initiatives.
              </td>
            </tr>
            <tr>
              <td>Strategic Sales</td>
              <td>50,000,000,000</td>
              <td>5%</td>
              <td>
                Locked until the strategic sales have officially been completed.
                From that point in time, locked for 6 months, then released via
                a 6-month linear release.
              </td>
              <td>
                Strategic Sale tokens will be saved for sales and partnerships
                in the project's future.
              </td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>65,000,000,000</td>
              <td>6.5%</td>
              <td>
                Not locked, available for usage at the discretion of the team.
              </td>
              <td>
                Marketing tokens will be used for marketing in the crypto space
                (calls, promotions, etc.). In the later stages of game
                development, control of this wallet will be transferred to the
                $ASCN token holder DAO.
              </td>
            </tr>
            <tr>
              <td>IDO</td>
              <td>110,000,000,000</td>
              <td>11%</td>
              <td>
                Locked in the liquidity pool for a minimum of 1 year. May be
                relocked after a discussed with the Ascension team and the
                Ascension community.
              </td>
              <td>
                IDO tokens are the tokens that will be released for the initial
                public sale.
              </td>
            </tr>
            <tr>
              <td>Private Raise</td>
              <td>55,000,000,000</td>
              <td>5.5%</td>
              <td>
                Locked until the private raise has been officially completed.
                From that point in time, locked for 6 months, the released via a
                6-month linear release.
              </td>
              <td>
                Private Raise tokens will be saved for official fundraising and
                sales to angel investors.
              </td>
            </tr>
            <tr>
              <td>Game Operations & Development</td>
              <td>100,000,000,000</td>
              <td>10%</td>
              <td>Linear release from the time of the IDO.</td>
              <td>
                Game Operations & Development tokens will be used for the
                further development of the Ascension Ecoverse game and all
                future Ascension initiatives. In the later stages of game
                development, control of this wallet will be transferred to the
                $ASCN token holder DAO
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          To ensure complete and total transparency throughout the development
          of the Ascension Ecoverse game, the wallet addresses are all listed
          below for investors, players, and community members alike to monitor:
        </p>
        <ul>
          <li>Team Tokens Wallet: [INSERT WALLET ADDRESS HERE]</li>
          <li>P2E Rewards Wallet: [INSERT WALLET ADDRESS HERE] </li>
          <li>Staking Rewards Wallet: [INSERT WALLET ADDRESS HERE] </li>
          <li>Air Drops Wallet: [INSERT WALLET ADDRESS HERE]</li>
          <li>Strategic Sales Wallet: [INSERT WALLET ADDRESS HERE] </li>
          <li>Marketing Wallet: [INSERT WALLET ADDRESS HERE]</li>
          <li>IDO Wallet: [INSERT WALLET ADDRESS HERE]</li>
          <li>Private Raise Wallet: [INSERT WALLET ADDRESS HERE]</li>
          <li>
            Game Operations & Development Wallet: [INSERT WALLET ADDRESS HERE]
          </li>
        </ul>
        <p>
          These wallets have not yet been created at this stage of the project,
          and the whitepaper will be include these addresses when the wallets
          have been created.
        </p>
        <h3 id="launch">Launch Tokenomics:</h3>
        <p>The launch tokenomics for the $ASCN token are as follows:</p>
        <ul>
          <li>
            110 Billion Tokens (110,000,000,000) Available For Public Purchase
          </li>
          <li>No Token Transaction Fees</li>
        </ul>
        <p>
          This token will be launched without transaction fees, as this is a
          project with a legitimate long-term product in the works. As a result,
          we see no need to take fees on token transactions at this early stage
          of the Ascension Ecoverse project, due to the fact that our sights are
          set on the long-term outcome. At this point in time, our tokenomics
          are set up to provide us with the necessary funds for development and
          payments to employees, ensuring that the team can focus on the
          development of the project and the Ascension community.
        </p>
        <h3 id="balancing">In-Game Balancing:</h3>
        <p>
          With all of the rewards that Ascension Ecoverse players earn, tokens
          will be minted quite frequently to keep up with demand. However, this
          can cause a problem for players and investors alike, as the consistent
          minting of tokens will result in an inflationary token. Over time, the
          value of the $ASCN tokens would continue to diminish as additional
          tokens are minted.
        </p>
        <p>
          Fortunately, the Ascension team has come up with in-game tokenomics
          that prevent the $ASCN token from becoming inflationary. After the
          initial 22.5% of the supply dedicated for P2E rewards has been earned
          by players, tokens will be minted each time a player sells a resource
          to the Vendor or stakes their tokens. To counterbalance these token
          mints, $ASCN tokens will be burned every time a player purchases an
          item from a Vendor or crafts an NFT.
        </p>
        <p>
          In short, each of the actions that a player can take in-game helps to
          balance the token supply. The team has worked hard to ensure that the
          active minting and burning of tokens results in a slightly
          deflationary system, ensuring that players can continue to play the
          game and enjoy their rewards without too much micromanagement on the
          part of the Ascension team.
        </p>
        <h3 id="fees">Fees:</h3>
        <p>
          To ensure that the Ascension Ecoverse game will grow at a consistent
          rate, a small fee similar to those charged by other projects is
          charged on three in-game actions, purchasing items from the Vendor,
          crafting items, and trading with other players. Although this may seem
          like a downside for players, the Ascension team felt that it was in
          everyone’s best interests to disclose the fees in the spirit of
          transparency, as these fees will be used for the continued development
          of the project in two different ways.
        </p>
        <p>
          Firstly, 50% of all fees taken on these actions will be contributed to
          staking rewards, as an effort to give back to the community. The
          continued contribution of tokens to staking rewards ensures that
          players will be able to stake their tokens over an extended period of
          time, without worrying that the bonus rewards will deplete themselves.
          Additionally, the majority of the remaining 50% of the fees will be
          sent to the ‘Game Operations & Development’ and ‘Marketing’ wallets,
          where they will be used for the ongoing success of the Ascension
          Ecoverse project. The remaining minority of tokens will be used for
          various miscellaneous expenses, such as legal, office fees, etc.
        </p>
        <p>
          To ensure that the project remains transparent, the use of these fees
          can be tracked via the wallet addresses found in the Token
          Distribution section of the whitepaper, as the fees will flow into the
          ‘Game Operations & Development,’ ‘Marketing,’ and ‘Staking Rewards’
          wallets.
        </p>
        <p>
          Finally, these fees will eventually work their way back to players in
          the long-term process of the development of the project. As the
          project reaches the Ascended stage of development, the $ASCN token
          holder DAO will take control of the ‘Game Operations & Development’
          and ‘Marketing’ wallets, ensuring that all fees on in-game actions
          will go directly back to the players. Until that time comes, the
          Ascension team is focused on ensuring that the fees will be used to
          create the most enjoyable player experience possible in the Ascension
          Ecoverse game.
        </p>

        <h2 id="community">Community:</h2>
        <p>
          Since the start of the Ascension project, one of our goals has been to
          build a community that is as passionate as we are about the project.
          We’ve implemented several initiatives to accomplish this goal,
          including:
        </p>
        <ul>
          <li>
            AMAs: The Ascension team prides itself on transparency, so we’ve
            implemented bi-weekly AMAs to assist in our transparency initiative.
            Every two weeks, we sit down and chat with our community about our
            progress updates, goals, and visions to keep an open line of
            communication with the people that matter the most.
          </li>
          <li>
            Community-Only Pack Access: We believe that the community behind a
            project is just as important as the team behind the project, and
            that’s why we’re implementing community-only pack drops, to reward
            the people that believe in our project as much as we do. These packs
            will contain ultra-rare items that will immediately cement owners in
            the halls of Ascension Ecoverse history.
          </li>
          <li>
            Community Giveaways: If special packs and items weren’t enough, the
            Ascension team is giving away free tokens too! These tokens serve
            two purposes as they provide the perfect perfect opportunity for us
            to incentivize new faces to join the community, as well as to give
            back to the initial adopters of the project.
          </li>
          <li>
            Project Discussions: As much as the Ascension team is passionate
            about the game we are creating, the people that are playing the game
            are members of the community. As a result, the Ascension team plans
            to discuss any big changes to the Ascension Ecoverse game or goals
            within the Ascension project itself with the community before making
            a final decision. We believe that every action we take should have a
            positive effect on those who play the Ascension Ecoverse game, as
            well as $ASCN token and Ascension Land NFT holders, and as a
            development team, we will take the necessary steps to ensure that
            the community is involved in major project decision we make.
          </li>
        </ul>

        <h2 id="team">Team:</h2>
        <p>
          Although this section outlines the contributions and achievements of
          the founding team members, the Ascension project would be nothing
          without the game developers, marketing professionals, artists, and
          customer support staff working behind the scenes!
        </p>
        <p>
          The Ascension Ecoverse project was brought together by three
          like-minded individuals whose bios can be found below:
        </p>
        <p>
          Dr. Muni Venkateswarlu Kumaramangalam, PhD:
          <br />
          Muni has a PhD in Computer Science and has extensive experience in
          research and development, as well as a strong background in blockchain
          technologies and smart contract development. He has previously worked
          on multiple blockchain projects with the University of Calgary and the
          University of Quebec at Chicoutimi. Currently, Muni is working on
          passion projects that address the issue of making cryptocurrency
          environmentally friendly, such as working with carbon credits, and
          assisting in the development of the Ascension Ecoverse game.
        </p>
        <p>
          Nidal Ghonaim: <br />
          Nidal is a jack-of-all-trades designer with experience in game design,
          web design, UX/UI design, and 3D modelling. He graduated with a
          Bachelor of Business Administration from Cardiff Metropolitan
          University in 2021 but has always been passionate about the technical
          side of business. As a result, Nidal has been freelancing as a
          designer for the past 2+ years, leading him to the world of
          cryptocurrency and the Ascension Ecoverse game.
        </p>
        <p>
          Patrick Dean: <br />
          Patrick is a second-year university student currently working towards
          completing his Bachelor of Business Administration at Wilfrid Laurier
          University. He has a passion for all things cryptocurrency, UX/UI, and
          digital marketing, having assisted with previous cryptocurrency
          projects and most recently gaining experience in the world of
          education technology at Pencil Learning Technologies. Currently,
          Patrick is taking on this founding role to dive deeper into the world
          of cryptocurrency and explore the opportunities that it can provide
          regarding environmental benefits.
        </p>

        <h2 id="support">Support:</h2>
        <p>
          Disclaimer: Please be aware of the fact that the Ascension Support
          Team will never reach out to you first in any capacity. If you receive
          an unsolicited message from anyone claiming to be part of our support
          team, it is highly likely that it is a scam. Please report the message
          to a trusted Ascension Team Member and do not click any links
          contained in the message.
        </p>
        <p>
          If you are experiencing issues with the game or have questions about
          the $ASCN token, plans, goals, or community, please use one of the
          following links to get the appropriate assistance.
        </p>
        <p>
          General Inquiries:{" "}
          <a href="https://discord.gg/wDxuxCaRaE">
            https://discord.gg/wDxuxCaRaE
          </a>
        </p>
        <p>
          Marketing Inquiries:{" "}
          <a href="mailto:ascensionecoverse@gmail.com">
            ascensionecoverse@gmail.com
          </a>
        </p>
        <p>
          Beginner Help:{" "}
          <a href="https://discord.gg/wDxuxCaRaE ">
            https://discord.gg/wDxuxCaRaE
          </a>
        </p>

        <h2 id="links">Trusted Links:</h2>
        <p>
          Due to the prevalence of scams in the cryptocurrency community, we
          have decided to house all of our trusted links in the whitepaper. If
          the link cannot be found here, it is almost certainly a phishing scam.
          Please use these links to redirect yourself to your intended
          destination if you are uncertain of the exact website address or
          social media account name.
        </p>
        <p>
          Official Website: <a href="https://ascensionx.com">ascensionx.com</a>
        </p>
        <p>
          Discord Community:{" "}
          <a href="https://discord.gg/wDxuxCaRaE">
            https://discord.gg/wDxuxCaRaE
          </a>
        </p>
        <p>
          Twitter Page:{" "}
          <a href="https://twitter.com/ascnecoverse">
            https://twitter.com/ascnecoverse
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/ascensionecoverse/ ">
            https://www.instagram.com/ascensionecoverse/
          </a>
        </p>
        <p>
          Reddit:
          <a href="https://www.reddit.com/user/AscensionEcoverse">
            https://www.reddit.com/user/AscensionEcoverse{" "}
          </a>
        </p>
        <p>
          Medium:{" "}
          <a href="https://medium.com/@ascensionecoverse ">
            https://medium.com/@ascensionecoverse
          </a>
        </p>
      </div>
    </div>
  );
};

export default Whitepaper;
