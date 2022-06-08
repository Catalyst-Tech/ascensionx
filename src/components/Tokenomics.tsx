import Leaf from "./Leaf";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Button from "@mui/material/Button";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  return (
    <>
      <h1>Tokenomics</h1>
      <h2>Token Distribution</h2>

      <Pie
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                footer: footer,
              },
            },
            legend: {
              labels: {
                boxWidth: 60,
                padding: 30,
                font: {
                  size: 17,
                },
                color: "white",
              },
            },
          },
          onClick: (e, element) => {
            setId(element[0].index);
            setOpen(true);
          },
        }}
        data={data}
        className="pie-chart"
      />

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="chartModal">
          <div className="chartModal--container">
            <Button onClick={() => setOpen(false)}>
              <GrClose />
            </Button>

            <h1>{tooltipData[id].Name}</h1>
            <h2>Allocation:</h2>
            <p>
              {tooltipData[id].Allocation}
              {", Percent of total: "}
              {tooltipData[id].Percent}
            </p>
            <h2>Unlock Schedule:</h2>
            <p>{tooltipData[id].Unlock}</p>
            <h2>Use Case:</h2>
            <p>{tooltipData[id].Use}</p>
          </div>
        </div>
      </Modal>

      <Leaf side="Left">
        <h2>Launch Tokenomics</h2>
        <p>
          110 billion tokens available for public sale, with ZERO
          token-generated transaction fees. Buy without wondering where your
          money is going, join our community, and get involved with the
          Ascension Ecoverse project!
        </p>
        <p>
          A more detailed tokenomics breakdown can be found in the{" "}
          <a href="#whitepaper">whitepaper</a>.
        </p>
      </Leaf>
    </>
  );
};

const footer = () => {
  return "Click for more info";
};

const tooltipData = [
  {
    Name: "Ascension tokens",
    Allocation: "150,000,000,000",
    Percent: "15%",
    Unlock:
      "Locked at launch for a minimum of 2 years. May be relocked after a discussion with the Ascension community.",
    Use: "Ascension tokens will be used to pay core team members for their work on the project.",
  },
  {
    Name: "P2E Rewards",
    Allocation: "225,000,000,000",
    Percent: "25.5%",
    Unlock: "Locked at launch. Issuance will start in Q4 of 2022.",
    Use: "P2E tokens will be used to reward players for their in-game actions.",
  },
  {
    Name: "Staking Rewards",
    Allocation: "225,000,000,000",
    Percent: "25.5%",
    Unlock: "Locked at launch. Issuance will start in Q3 of 2022.",
    Use: "Staking Reward tokens will be used to reward players for staking their tokens to increase the locked liquidity in the project.",
  },
  {
    Name: "Air Drops",
    Allocation: "20,000,000,000",
    Percent: "2%",
    Unlock: "Linear release from the time of the IDO.",
    Use: "Air Drop tokens will be used for community marketing initiatives.",
  },
  {
    Name: "Strategic Sales",
    Allocation: "50,000,000,000",
    Percent: "5%",
    Unlock:
      "Locked until the strategic sales have officially been completed. From that point in time, locked for 6 months, then released via a 6-month linear release.",
    Use: "Strategic Sale tokens will be saved for sales and partnerships in the project's future.",
  },
  {
    Name: "Marketing",
    Allocation: "65,000,000,000",
    Percent: "6.5%",
    Unlock: "Not locked, available for usage at the discretion of the team.",
    Use: "Marketing tokens will be used for marketing in the crypto space (calls, promotions, etc.). In the later stages of game development, control of this wallet will be transferred to the $ASCN token holder DAO.",
  },
  {
    Name: "IDO",
    Allocation: "110,000,000,000",
    Percent: "15%",
    Unlock:
      "Locked in the liquidity pool for a minimum of 1 year. May be relocked after a discussed with the Ascension team and the Ascension community.",
    Use: "IDO tokens are the tokens that will be released for the initial public sale.",
  },
  {
    Name: "Private Raise",
    Allocation: "55,000,000,000",
    Percent: "5.5%",
    Unlock:
      "Locked until the private raise has been officially completed. From that point in time, locked for 6 months, the released via a 6-month linear release.",
    Use: "Private Raise tokens will be saved for official fundraising and sales to angel investors.",
  },
  {
    Name: "Game Operations & Development",
    Allocation: "100,000,000,000",
    Percent: "10%",
    Unlock: "Linear release from the time of the IDO.",
    Use: "Game Operations & Development tokens will be used for the further development of the Ascension Ecoverse game and all future Ascension initiatives. In the later stages of game development, control of this wallet will be transferred to the $ASCN token holder DAO",
  },
];

const data = {
  labels: [
    "Ascension Tokens",
    "P2E Rewards",
    "Staking Rewards",
    "Air Drops",
    "Strategic Sales",
    "Marketing",
    "IDO",
    "Private Raise",
    "Game Operations & Development",
  ],
  datasets: [
    {
      label: "% of total",
      data: [15, 22.5, 22.5, 2, 5, 6.5, 11, 5.5, 10],
      backgroundColor: [
        "#68D33B",
        "#F2D693",
        "#0C1762",
        "#0F2C94",
        "#4F74BF",
        "#53422E",
        "#382C20",
        "#0D3808",
        "#177114",
      ],
      borderWidth: 2,
    },
  ],
};

export default Tokenomics;
