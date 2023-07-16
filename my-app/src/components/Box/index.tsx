import { motion } from "framer-motion";
import { useState } from "react";

export const Box = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <motion.div
      className="w-40 h-40 mb-40 bg-teal-500 flex items-center justify-center"
      animate={{
        x: animate ? "60rem" : 0,
        opacity: animate ? 1 : 0.1,
        rotate: animate ? 360 : 0,
      }}
      initial={{
        opacity: 0.1,
      }}
      transition={{
        type: "spring",
        // duration: 2,
        stiffness: 60,
        // damping: 5,
      }}
      onClick={() => setAnimate(!animate)}
    >
      box
    </motion.div>
  );
};
