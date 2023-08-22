import { motion } from "framer-motion";

export const VariantBox = () => {
  const variants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        // delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const childVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="w-40 h-40 bg-teal-500 flex flex-col gap-2 items-center justify-center"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3].map((box, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 bg-white flex items-center justify-center"
          variants={childVariants}
        >
          {box}
        </motion.div>
      ))}
    </motion.div>
  );
};
