"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const HomeComponent = () => {
 
    return (
      <main className="flex mt-[60px] flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 text-white p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Welcome to Chess Ratings
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Check Chess Rating Online
          </p>
        </motion.div>
  
        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Chess Rating
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Monitor chess rating over time, track  progress.
          </p>
        </section>
  
        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            How It Works
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg">
             SignIn/SignUp and checkout the top 100 classical Chess players from Lichess
          </p>
        </section>
  
        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
           Leaderboard
          </h2>
          <p className="text-sm mb-8 md:text-base lg:text-lg">
            Ready to check out chess rating? Join our community and start your
            chess journey today.
          </p>
          <Link
            href="/leaderboard"
            className="mt-8 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Leaderboard
          </Link>
        </section>
      </main>
    );
  };
  
  export default HomeComponent;
  
