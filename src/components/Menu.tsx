import Button from "@mui/material/Button";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <Button href="/ascensionx">Home</Button>
      {/*<Button href="/ascensionx/buy">Buy $ASCN</Button>*/}
      <Button href="/ascensionx/whitepaper">Whitepaper</Button>
      {/*<Button href="/ascensionx/gettingStarted">Getting Started</Button>*/}
    </nav>
  );
};

export default Menu;
