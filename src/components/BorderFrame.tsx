'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function BorderFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="exit"
        animate="enter"
        exit="exit"
        variants={containerVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative min-h-screen"
      >
        {/* Top Border */}
        <motion.div
          variants={lineVariants.top}
          className="fixed top-[15px] left-[15px] right-[15px] h-[1px] bg-white z-[9999] origin-left"
        />
        {/* Bottom Border */}
        <motion.div
          variants={lineVariants.bottom}
          className="fixed bottom-[15px] left-[15px] right-[15px] h-[1px] bg-white z-[9999] origin-right"
        />
        {/* Left Border */}
        <motion.div
          variants={lineVariants.left}
          className="fixed top-[15px] bottom-[15px] left-[15px] w-[1px] bg-white z-[9999] origin-top"
        />
        {/* Right Border */}
        <motion.div
          variants={lineVariants.right}
          className="fixed top-[15px] bottom-[15px] right-[15px] w-[1px] bg-white z-[9999] origin-bottom"
        />

        {/* Content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

const containerVariants = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const lineVariants = {
  top: {
    enter: { scaleX: 1, transition: { duration: 0.4 } },
    exit: { scaleX: 0, transition: { duration: 0.4 } },
  },
  bottom: {
    enter: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } },
    exit: { scaleX: 0, transition: { duration: 0.4, delay: 0.1 } },
  },
  left: {
    enter: { scaleY: 1, transition: { duration: 0.4, delay: 0.2 } },
    exit: { scaleY: 0, transition: { duration: 0.4, delay: 0.2 } },
  },
  right: {
    enter: { scaleY: 1, transition: { duration: 0.4, delay: 0.3 } },
    exit: { scaleY: 0, transition: { duration: 0.4, delay: 0.3 } },
  },
};
