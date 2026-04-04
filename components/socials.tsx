"use client";

import { DownloadIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const itemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Socials() {
  return (
    <motion.div
      className="relative z-50 flex h-fit w-full items-center justify-center p-4 md:fixed md:top-0 md:left-0 md:h-screen md:w-10 md:justify-start"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-fit w-full items-center justify-between gap-8 md:w-auto md:flex-col">
        <Link
          aria-label="Go to my Github profile"
          target="_blank"
          title="Go to my Github profile"
          href="https://github.com/radhirasho"
        >
          <motion.span
            custom={0}
            initial="initial"
            animate="animate"
            variants={itemAnimation}
            whileHover={{ scale: 1.12, y: -2 }}
            className="block"
          >
            <FaGithub size={35} className="text-xs hover:text-red-500" />
          </motion.span>
        </Link>
        <Link
          aria-label="Go to my X/Twitter profile"
          target="_blank"
          title="Go to my Twitter profile"
          href="https://twitter.com/RadhiRasho"
        >
          <motion.span
            custom={1}
            initial="initial"
            animate="animate"
            variants={itemAnimation}
            whileHover={{ scale: 1.12, y: -2 }}
            className="block"
          >
            <FaXTwitter size={35} className="text-xs hover:text-red-500" />
          </motion.span>
        </Link>
        <Link
          aria-label="Go to my LinkedIn profile"
          target="_blank"
          title="Go to my LinkedIn profile"
          href="https://www.linkedin.com/in/radhi-rasho"
        >
          <motion.span
            custom={2}
            initial="initial"
            animate="animate"
            variants={itemAnimation}
            whileHover={{ scale: 1.12, y: -2 }}
            className="block"
          >
            <FaLinkedinIn size={35} className="text-xs hover:text-red-500" />
          </motion.span>
        </Link>
        <a
          aria-label="Download my resume"
          target="_blank"
          href="/Resume.pdf"
          title="Download my resume"
          rel="noreferrer"
        >
          <motion.span
            custom={3}
            initial="initial"
            animate="animate"
            variants={itemAnimation}
            whileHover={{ scale: 1.12, y: -2 }}
            className="block"
          >
            <DownloadIcon size={35} className="text-xs hover:text-red-500" />
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
}
