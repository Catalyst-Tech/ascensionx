import Header from "./Header";

const Buy: React.FC = () => {
  return (
    <div className="main--container">
      <Header />
      <div className="buy">
        <h1>Buy $ASCN</h1>

        <h2>Step 1: Create a Venly Wallet</h2>
        <p>
          Go to venly.io/product-wallet, click the ‘My wallet’ button in the
          upper right corner of the website, and follow the steps provided by
          Venly to create a wallet.
        </p>
        <p>
          For those who wish to buy the $ASCN token and already have a different
          wallet with some MATIC in it, skip directly to Step 3
        </p>

        <h2>Step 2: Purchase/Transfer MATIC</h2>
        <p>
          One of the major benefits of our partnership with Venly for this
          project is that the Venly application allows you to purchase
          cryptocurrencies using standard payment methods. Take advantage of
          their features to purchase some MATIC and have it transferred directly
          into your wallet!
        </p>
        <p>
          Alternatively, if you already have MATIC in another wallet, transfer
          it to your Venly wallet by entering the address of your Venly wallet
          in your other wallet application, and confirming the transfer.
        </p>

        <h2>Step 3: Connect Your Wallet to QuickSwap</h2>
        <p>
          Connect your wallet to QuickSwap by clicking the ‘Connect to a wallet’
          button located in the upper right corner of the website. Select your
          wallet provider from the list of the options presented and log into
          your wallet to successfully connect your wallet to QuickSwap.
        </p>

        <h2>Step 4: Swap Your MATIC for $ASCN</h2>
        <p>
          To successfully swap your MATIC for $ASCN, enter the $ASCN token
          address into the search bar, which can be found on our official
          website or in our official Discord channel. From there, decided how
          much MATIC you want to use, and click the “Swap” button in the center
          of the screen.
        </p>
      </div>
    </div>
  );
};

export default Buy;
