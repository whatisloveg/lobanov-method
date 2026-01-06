import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-20 w-20 border-2 border-primary/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute right-[15%] top-[30%] h-16 w-16 bg-primary/10"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute left-[5%] bottom-[30%] h-12 w-12 border border-primary/30"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute right-[8%] bottom-[20%] h-24 w-1 bg-primary/20"
        animate={{
          height: ["6rem", "8rem", "6rem"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute left-[50%] top-[10%] h-8 w-8 rounded-full border border-primary/20"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid lines */}
      <motion.div
        className="absolute left-0 top-[40%] h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute left-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
