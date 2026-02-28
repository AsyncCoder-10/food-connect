import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-elevated"
        >
          <Leaf className="h-7 w-7 text-primary-foreground" />
        </motion.div>
        <div className="flex items-center gap-1.5">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} className="h-2 w-2 rounded-full bg-primary" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} className="h-2 w-2 rounded-full bg-primary" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} className="h-2 w-2 rounded-full bg-primary" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
};

export default PageLoader;
