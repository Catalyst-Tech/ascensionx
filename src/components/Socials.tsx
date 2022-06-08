import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaMediumM,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials: React.FC = () => {
  return (
    <nav className="socials">
      <motion.a
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
        }}
        href="https://discord.gg/wDxuxCaRaE"
        target="_blank"
        rel="noreferrer"
      >
        <FaDiscord />
      </motion.a>

      <motion.a
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
        }}
        href="https://twitter.com/ascnecoverse"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </motion.a>

      <motion.a
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
        }}
        href="https://www.instagram.com/ascensionecoverse/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </motion.a>

      <motion.a
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
        }}
        href="https://www.reddit.com/user/AscensionEcoverse"
        target="_blank"
        rel="noreferrer"
      >
        <FaRedditAlien />
      </motion.a>

      <motion.a
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
        }}
        href="https://medium.com/@ascensionecoverse"
        target="_blank"
        rel="noreferrer"
      >
        <FaMediumM />
      </motion.a>
    </nav>
  );
};

export default Socials;
