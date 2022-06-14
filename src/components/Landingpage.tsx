import Banner from "./Banner";
import Header from "./Header";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Landingpage: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        default: { duration: 1 },
      }}
      className="LandingPage"
    >
      <Header />
      <Banner />
      <div className="stack stack--jic">
        <Socials id="Social-Media-Menu-1" />
      </div>
    </motion.div>
  );
};

export default Landingpage;
