"use client";

import styles from "./app.module.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useLenis from "@/hooks/useLenis";
import { motion, Variants } from "framer-motion";
import TransitionLink from "@/utils/TransitionLink/TransitionLink";

export default function Home() {
  // Smooth scroll
  useLenis();

  // Parallax effect
  const [offsetY, setOffsetY] = useState(0);
  const showcaseRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (!showcaseRef.current) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionOffsetTop = showcaseRef.current.offsetTop;
    const relativeY = scrollTop - sectionOffsetTop;
    setOffsetY(relativeY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariant: Variants = {
    hidden: { y: "100%", opacity: 0, skewY: 10 },
    visible: {
      y: "0%",
      opacity: 1,
      skewY: 0,
      transition: {
        duration: 2.2,
        ease: [0.87, 0.13, 0, 1],
      },
    },
  };

  return (
    <main className={styles.main}>
      {/* Spacer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="h-screen"
      >
        <div className={styles.mico}>
          <div className="overflow-hidden">
            <motion.h1 variants={textVariant}>Codeprint N001</motion.h1>
          </div>
          <ul>
            <li className="relative">
              <TransitionLink
                href="https://github.com/Mohsinech/codeprint-Base"
                label="SOURCE CODE ↗"
              />
            </li>
          </ul>
        </div>
      </motion.section>

      {/* === Showcase 1 (image left only) === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={styles.showcase}
      >
        <div
          className={`${styles.imageWrapper} ${styles.leftImage}`}
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          <div className={styles.imageInner}>
            <Image
              src="/assets/images/pic.png"
              alt="Showcase"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </motion.section>

      {/* === Showcase  (image right only) === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        ref={showcaseRef}
        className={styles.showcase}
      >
        <div
          className={`${styles.imageWrapper} ${styles.rightImage}`}
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          <div className={styles.imageInner}>
            <Image
              src="/assets/images/pic1.png"
              alt="Showcase"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </motion.section>

      {/* === Showcase 4 (image right with content inside) === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={styles.showcase}
      >
        <div
          className={`${styles.imageWrapper} ${styles.leftImage}`}
          style={{
            transform: `translateY(${offsetY * 0.1}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        >
          <div className={styles.imageInner}>
            <Image
              src="/assets/images/pic2.png"
              alt="Showcase"
              fill
              style={{ objectFit: "contain" }}
            />

            {/* content inside image */}
            <div className={styles.contentInside}>
              <div className="overflow-hidden">
                <motion.h1 variants={textVariant}>milcode</motion.h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Spacer */}
      <section className="h-screen"></section>
    </main>
  );
}
