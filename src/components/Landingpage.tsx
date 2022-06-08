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
        <Socials />
        {/*<motion.a
          initial={{ rotate: 0 }}
          whileHover={{
            rotate: [0, 10, -10, 0],
          }}
          href="/ascensionx/buy"
          className="button button--2nd"
        >
          Buy $ASCN
        </motion.a>*/}
      </div>
    </motion.div>
  );
};

export default Landingpage;
