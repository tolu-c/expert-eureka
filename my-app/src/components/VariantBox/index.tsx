import { motion } from "framer-motion";

export const VariantBox = () => {
  // const [boxes, setBoxes] = useState()
  const variants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
  };

  return (
    <motion.div
      className="w-40 h-40 bg-teal-500 flex flex-col gap-2 items-center justify-center"
      variants={variants}
      initial="hidden"
      animate="visible"
      // animate="box"
      // initial="boxInitial"
      // variants={variants}
      // initial={{
      //   x: -300,
      // }}
    >
      {[1, 2, 3].map((box) => (
        <div
          key={box}
          className="w-8 h-8 bg-white flex items-center justify-center"
        >
          {box}
        </div>
      ))}
    </motion.div>
  );
};
