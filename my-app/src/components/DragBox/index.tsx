import { motion } from "framer-motion";

export const DragBox = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-teal-500 flex items-center justify-center"
      drag
      dragConstraints={{ right: 7, left: -15, top: 7, bottom: 7 }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      DragBox
    </motion.div>
  );
};
