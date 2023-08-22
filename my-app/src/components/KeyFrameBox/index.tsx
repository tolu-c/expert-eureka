import { motion } from "framer-motion";
import { useState } from "react";

export const KeyFrameBox = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-teal-500 flex items-center justify-center"
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{
        duration: 2,
        // repeat: Infinity,
      }}
    >
      box
    </motion.div>
  );
};
