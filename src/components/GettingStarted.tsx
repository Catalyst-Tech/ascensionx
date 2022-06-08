import { useState } from "react";
import Header from "./Header";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import White from "../images/Solid_white_bordered.png";

const steps = [
  "Create a Venly wallet",
  "Purchase your Ascension Land NFT",
  "Create your Ascension Ecoverse account",
  "Download and Play",
];

const GettingStarted: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  return (
    <div className="GettingStarted">
      <div className="main--container">
        <Header />
        <h1>Getting Started</h1>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel sx={{ color: White }}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Content page={activeStep} />
        <div className="stepperButtons">
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;

type ContentProps = {
  page: number;
};

const Content: React.FC<ContentProps> = ({ page }) => {
  switch (page) {
    case 0:
      return (
        <div className="stepperContent">
          <img src={White} alt="cartoon" />
          <p>
            Create a Venly wallet. This wallet will allows you to buy, sell,
            send, and receive $ASCN, and will also allow you to store your
            Ascension Ecoverse NFTs.
          </p>
        </div>
      );

    case 1:
      return (
        <div className="stepperContent">
          <div className="stepperContent--text">
            <p>
              Purchase your Ascension Land NFT. To purchase an Ascension NFT,
              you’ll need to load your wallet with MATIC. If you’re unsure of
              how to do so or don’t already have MATIC in a different wallet,
              our wallet partner Venly allows you to purchase MATIC directly in
              your wallet using standard payment methods!
            </p>
            <p>
              Once you’ve done that, grab your Ascension NFT from our official
              webstore here: [INSERT LINK HERE] or from a secondary marketplace:
              [SEVERAL LINKS HERE]
            </p>
          </div>
          <img src={White} alt="cartoon" />
        </div>
      );

    case 2:
      return (
        <div className="stepperContent">
          <img src={White} alt="cartoon" />
          <p>
            Create your Ascension Ecoverse account. To create your account, sign
            up with an email and create a password for your account.
          </p>
        </div>
      );

    case 3:
      return (
        <div className="stepperContent">
          <p>
            Log into your account on the Ascension Game Portal and jump into the
            gameplay!
          </p>
          <img src={White} alt="cartoon" />
        </div>
      );

    default:
      return null;
  }
};
