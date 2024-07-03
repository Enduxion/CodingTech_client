import { motion } from "framer-motion";
export default function TransitionComponent(WrappedComp) {
  return () => (
    <>
      <motion.div
        className="w-screen fixed top-0 left-0 h-screen bg-white origin-bottom z-50 border-2 border-black text-5xl font-roboto flex items-center justify-center text-gray-600"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "backOut", delay: 0 }}
      >
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 0 }}
          exit={{ rotateZ: "360deg" }}
          transition={{ duration: 0.5 }}
        >
          <i className="fa fa-spinner"></i>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-screen fixed top-0 left-0 h-screen bg-white origin-top z-50 border-2 border-black text-5xl font-roboto flex items-center justify-center text-gray-600"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ sacleY: 0 }}
        transition={{ duration: 0.5, ease: "backOut", delay: 0 }}
      >
        <motion.div
          initial={{ rotateZ: "360deg" }}
          animate={{ rotateZ: 0 }}
          exit={{ rotateZ: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fa fa-spinner"></i>
        </motion.div>
      </motion.div>
      <WrappedComp />
    </>
  );
}
