import { ReactNode } from "react";
// import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

type LeafProps = {
  side: "Left" | "Right";
  children: ReactNode;
};

const Leaf: React.FC<LeafProps> = ({ children, side }) => {
  const speed = Math.floor(Math.random() * 15) + 5;

  /* if (side === "Left") {
        return(
            <motion.div
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ default: { default: { duration: 4 } }}}
            className="contentContainer--left">
                {children}
            </motion.div>
        );
    } else {
        return(
            <motion.div
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ default: { default: { duration: 4 } }}}
            className="contentContainer--right">
                {children}
            </motion.div>
        );
    } */
  if (side === "Left") {
    return (
      <Parallax speed={speed} className="contentContainer--left">
        {children}
      </Parallax>
    );
  } else {
    return (
      <Parallax speed={speed} className="contentContainer--right">
        {children}
      </Parallax>
    );
  }
};

export default Leaf;
