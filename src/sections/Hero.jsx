import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-primary flex items-center overflow-hidden">

      <div className="z-10 pl-10 md:pl-20 flex flex-col items-start space-y-6 text-white w-1/2">
        <h1 className="text-4xl font-mono md:text-6xl font-bold leading-tight">
          Trusted Multi-Chain <span className="text-yellow-300">DEX</span> Platform
        </h1>
        <p className="text-gray-400">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX.
        </p>
        <div className="flex space-x-4">
          <button className='bg-gradient-to-r from-yellow-300 from-10% to-yellow-100 to-84% text-black font-bold px-5 py-3 rounded-full inline-flex align-items justify-center tracking-tight'>Connet Wallet</button>
          <button className="bg-transparent border border-yellow-300 text-yellow-300 font-bold px-5 py-3 rounded-full hover:bg-yellow-300 hover:text-black">
            Trade Crypto
          </button>
        </div>
      </div>


      <div className="relative w-1/2 h-full flex items-center justify-center">

        <div className="absolute w-[500px] h-[200px] border border-yellow-400/30 rounded-full transform translate-x-1/2 animate-pulse"></div>
        <div className="absolute w-[700px] h-[300px] border border-yellow-400/20 rounded-full transform translate-x-1/2"></div>


        <motion.div
          className="absolute bg-yellow-300 rounded-full w-40 h-40 shadow-[0_0_60px_rgba(255,221,0,0.5)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        ></motion.div>


        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 2 + 1,
            }}
          >
            <div className="absolute w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
