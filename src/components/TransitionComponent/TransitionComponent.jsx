import { motion } from "framer-motion";
export default function TransitionComponent(WrappedComp) {
  return () => (
    <>
      <motion.div
        className="w-screen fixed top-0 left-0 h-screen bg-gray-200 origin-bottom z-50 border-2 border-black text-5xl font-roboto flex items-center justify-center text-gray-600"
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
      >
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 0 }}
          exit={{ rotateZ: "720deg" }}
          transition={{ duration: 1 }}
        >
          <i className="fa fa-spinner"></i>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-screen fixed top-0 left-0 h-screen bg-gray-200 origin-top z-50 border-2 border-black text-5xl font-roboto flex items-center justify-center text-gray-600"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ sacleY: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      >
        <motion.div
          initial={{ rotateZ: "720deg" }}
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
