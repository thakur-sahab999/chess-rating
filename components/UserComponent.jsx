"use client";
// pages/user/[username].js
import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaChessKing,
  FaChessRook,
  FaChessPawn,
} from "react-icons/fa";

const UserProfile = ({ res }) => {
  const user = res;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen mt-[60px] bg-white text-black p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-purple-500">
          {user?.user?.name}'s Profile
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border p-4 md:p-6 rounded-md shadow-md"
          >
            <h2 className="text-lg md:text-2xl text-purple-400 font-bold mb-2">
              General Info
            </h2>
            <p>
              <FaChessKing className="inline mr-2" />
              Rank: {user?.rank}
            </p>
            <p>
              <FaTrophy className="inline mr-2" />
              Percentile: {user?.percentile}%
            </p>
            <p>
              <FaChessKing className="inline mr-2" />
              Highest Rating: {user?.stat?.highest?.int}
            </p>
            <p>
              <FaChessPawn className="inline mr-2" />
              Joined Lichess: {formatDate(user?.stat?.lowest?.at)}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border p-4 md:p-6 rounded-md shadow-md"
          >
            <h2 className="text-lg md:text-2xl font-bold text-purple-400 mb-2">
              Rating History
            </h2>
            <p>
              <FaChessKing className="inline mr-2" />
              Current Rating: {user.perf.glicko.rating.toFixed(2)}
            </p>
            <p>
              <FaChessPawn className="inline mr-2" />
              Rating Deviation: {user.perf.glicko.deviation.toFixed(2)}
            </p>
            <p>
              <FaChessRook className="inline mr-2" />
              Total Games Played: {user.stat.count.all}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border p-4 md:p-6 rounded-md shadow-md"
          >
            <h2 className="text-lg md:text-2xl text-purple-400 font-bold mb-2">
              Statistics
            </h2>
            <p>Berserk Count: {user.stat.count.berserk}</p>
            <p>Wins: {user.stat.count.win}</p>
            <p>Losses: {user.stat.count.loss}</p>
            <p>Draws: {user.stat.count.draw}</p>
            <p>Tournaments Played: {user.stat.count.tour}</p>
            <p>Disconnects: {user.stat.count.disconnects}</p>
            <p>Rated Games: {user.stat.count.rated}</p>
            <p>
              <FaChessRook className="inline mr-2" />
              Play Streak: {user.stat.playStreak.nb.max.v} games
            </p>
            <p>
              <FaChessPawn className="inline mr-2" />
              Last Played: {formatDate(user.stat.playStreak.lastDate)}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border p-4 md:p-6 rounded-md shadow-md"
          >
            <h2 className="text-lg md:text-2xl text-purple-400 font-bold mb-2">
              Best Wins
            </h2>
            <ul>
              {user.stat.bestWins.results.map((result, index) => (
                <li key={index}>
                  <FaTrophy className="inline mr-2" />
                  Against {result.opId.name} ({result.opRating}), on{" "}
                  {formatDate(result.at)}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border p-4 md:p-6 rounded-md shadow-md"
          >
            <h2 className="text-lg md:text-2xl text-purple-400 font-bold mb-2">
              Worst Losses
            </h2>
            <ul>
              {user.stat.worstLosses.results.map((result, index) => (
                <li key={index}>
                  <FaChessPawn className="inline mr-2" />
                  Against {result.opId.name} ({result.opRating}), on{" "}
                  {formatDate(result.at)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
