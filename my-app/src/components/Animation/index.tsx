import { motion, useAnimation } from "framer-motion";

export const AnimateBox = () => {
  const controls = useAnimation();
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex gap-x-3">
        <button
          className="px-4 py-2 rounded-lg bg-amber-700 text-white font-medium cursor-pointer"
          onClick={() => {
            controls.start({
              x: 400,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
        >
          Move Right
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-amber-700 text-white font-medium cursor-pointer "
          onClick={() => {
            controls.start({
              x: 0,
              transition: {
                duration: 1,
                type: "spring",
              },
            });
          }}
        >
          Move Left
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-amber-700 text-white font-medium cursor-pointer "
          onClick={() => {
            controls.start({
              borderRadius: "50%",
              transition: {
                duration: 1,
              },
            });
          }}
        >
          Circle
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-amber-700 text-white font-medium cursor-pointer "
          onClick={() => {
            controls.start({
              borderRadius: 0,
              transition: {
                duration: 1,
              },
            });
          }}
        >
          Square
        </button>
        <button
          onClick={() => {
            controls.stop();
          }}
          className="px-4 py-2 rounded-lg bg-amber-700 text-white font-medium cursor-pointer "
        >
          stop
        </button>
      </div>
      <motion.div
        className="w-40 h-40 bg-teal-500 flex items-center justify-center"
        animate={controls}
      >
        index
      </motion.div>
    </div>
  );
};
