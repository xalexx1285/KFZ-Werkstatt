import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Word-by-word masked reveal (Lando Norris / editorial style).
 * The intersection observer lives on the STABLE parent container so the
 * (translated/hidden) word spans don't block their own trigger.
 */
export function RevealText({ text, className, as = "div", delay = 0, wordDelay = 0.05 }) {
  const words = String(text).split(" ");
  const MotionTag = motion[as] || motion.div;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: wordDelay, delayChildren: delay },
    },
  };
  const child = {
    hidden: { y: "115%" },
    visible: { y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.05]">
          <motion.span variants={child} className="inline-block will-change-transform">
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * Generic fade + lift on enter.
 */
export function FadeIn({ children, className, delay = 0, y = 40 }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
