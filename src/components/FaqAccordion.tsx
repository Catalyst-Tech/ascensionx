import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const MotionAccordion = motion(Accordion);

type FaqAccordionProps = {
  title: string;
  content: string;
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ title, content }) => {
  return (
    <div className="FaqAccordion">
      <MotionAccordion
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </MotionAccordion>
    </div>
  );
};

export default FaqAccordion;
