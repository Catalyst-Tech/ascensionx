import Button from "@mui/material/Button";

const Menu: React.FC = () => {
  return (
    <nav className="menu" id="Main Menu" aria-label="Main Menu">
      <Button href="/" aria-label="Home">Home</Button>
      {/*<Button href="/ascensionx/buy">Buy $ASCN</Button>*/}
      <Button href="#/ascensionx/whitepaper" aria-label="Whitepaper">Whitepaper</Button>
      {/*<Button href="/ascensionx/gettingStarted">Getting Started</Button>*/}
    </nav>
  );
};

export default Menu;
