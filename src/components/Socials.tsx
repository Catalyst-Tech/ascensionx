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
        aria-label="Discord"
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
        aria-label="Twitter"
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
        aria-label="Instagram"
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
        aria-label="Reddit"
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
        aria-label="Medium"
      >
        <FaMediumM />
      </motion.a>
    </nav>
  );
};

export default Socials;
