"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./transition.module.css";

const DURATION = 1;
const STAGGER = 0.025;

interface TransitionLinkProps {
  href: string;
  label: string;
  style?: React.CSSProperties;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  label,
  style,
}) => {
  const letters = label.split("");

  return (
    <motion.a
      href={href}
      className={styles.link}
      initial="initial"
      whileHover="hoverd"
      style={{ display: "inline-block", ...style }}
    >
      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "top",
        }}
        className={styles.a}
      >
        {letters.map((l, i) => (
          <motion.span
            key={`up-${i}`}
            variants={{
              initial: { y: 0 },
              hoverd: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              delay: i * STAGGER,
              ease: [0.65, 0.05, 0, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </span>

      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "top",
          position: "absolute",
          left: 0,
          top: 0,
        }}
        className={styles.a}
      >
        {letters.map((l, i) => (
          <motion.span
            key={`down-${i}`}
            variants={{
              initial: { y: "100%" },
              hoverd: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              delay: i * STAGGER,
              ease: [0.65, 0.05, 0, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </span>
    </motion.a>
  );
};

export default TransitionLink;
