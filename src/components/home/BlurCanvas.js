import React from "react";import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#A0A0A0]">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#A0A0A0]" />

      {/* First animated light layer - Weaker blur with soft edges */}
      <motion.div
        className="absolute"
        style={{
          width: "1875.5px",
          height: "1211px",
          left: "0px",
          top: "-106px",
          background: `
            conic-gradient(from 15deg at 290px 400px, 
              rgba(246, 255, 236, 0.4) 0deg,
              rgba(246, 255, 236, 0.6) 80deg,
              rgba(246, 255, 236, 0.3) 140deg,
              rgba(255, 255, 255, 0) 180deg,
              rgba(255, 255, 255, 0) 360deg
            ),
            radial-gradient(ellipse 1200px 800px at 400px 200px, 
              rgba(246, 255, 236, 0.3) 0%, 
              rgba(246, 255, 236, 0.1) 40%, 
              rgba(255, 255, 255, 0) 70%
            )
          `,
          filter: "blur(8px)",
          transform: "rotate(-12deg)",
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second animated light layer - Stronger blur with soft edges */}
      <motion.div
        className="absolute"
        style={{
          width: "1400px",
          height: "1200px",
          left: "-200px",
          top: "-150px",
          background: `
            conic-gradient(from 25deg at 600px 500px, 
              rgba(255, 254, 249, 0.9) 0deg,
              rgba(255, 254, 249, 0.7) 60deg,
              rgba(255, 254, 249, 0.4) 120deg,
              rgba(255, 255, 255, 0) 160deg,
              rgba(255, 255, 255, 0) 360deg
            ),
            radial-gradient(ellipse 1000px 600px at 400px 300px, 
              rgba(255, 254, 249, 0.8) 0%, 
              rgba(255, 254, 249, 0.4) 30%, 
              rgba(255, 255, 255, 0) 60%
            )
          `,
          filter: "blur(35px)",
          transform: "rotate(-8deg)",
        }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Third floating light element with soft edges */}
      <motion.div
        className="absolute"
        style={{
          width: "800px",
          height: "600px",
          right: "200px",
          top: "100px",
          background: `
            conic-gradient(from 35deg at 400px 300px, 
              rgba(246, 255, 236, 0.4) 0deg,
              rgba(246, 255, 236, 0.2) 90deg,
              rgba(255, 255, 255, 0) 180deg,
              rgba(255, 255, 255, 0) 360deg
            ),
            radial-gradient(ellipse 500px 300px at center, 
              rgba(246, 255, 236, 0.3) 0%, 
              rgba(255, 255, 255, 0) 65%
            )
          `,
          filter: "blur(18px)",
          transform: "rotate(15deg)",
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Fourth smaller floating light with soft edges */}
      <motion.div
        className="absolute"
        style={{
          width: "600px",
          height: "400px",
          right: "600px",
          bottom: "200px",
          background: `
            conic-gradient(from -20deg at 300px 200px, 
              rgba(255, 254, 249, 0.3) 0deg,
              rgba(255, 254, 249, 0.2) 100deg,
              rgba(255, 255, 255, 0) 180deg,
              rgba(255, 255, 255, 0) 360deg
            ),
            radial-gradient(ellipse 350px 250px at center, 
              rgba(255, 254, 249, 0.25) 0%, 
              rgba(255, 255, 255, 0) 70%
            )
          `,
          filter: "blur(15px)",
          transform: "rotate(-10deg)",
        }}
        animate={{
          y: [0, 18, 0],
          x: [0, -8, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      />

      {/* Fifth accent light with soft edges */}
      <motion.div
        className="absolute"
        style={{
          width: "500px",
          height: "350px",
          left: "400px",
          bottom: "100px",
          background: `
            conic-gradient(from 45deg at 250px 175px, 
              rgba(246, 255, 236, 0.35) 0deg,
              rgba(246, 255, 236, 0.2) 80deg,
              rgba(255, 255, 255, 0) 150deg,
              rgba(255, 255, 255, 0) 360deg
            ),
            radial-gradient(ellipse 300px 200px at center, 
              rgba(246, 255, 236, 0.3) 20%, 
              rgba(255, 255, 255, 0) 75%
            )
          `,
          filter: "blur(12px)",
          transform: "rotate(8deg)",
        }}
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4.5,
        }}
      />

      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(160, 160, 160, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(160, 160, 160, 0.1) 100%)",
        }}
      />
    </div>
  );
}