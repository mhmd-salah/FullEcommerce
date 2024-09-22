import { motion } from "framer-motion";
import { ReactNode } from "react";

function PageWrapper({ children }: { children: ReactNode }) {
  return <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.5}}
  >{children}</motion.div>;
}

export default PageWrapper;
