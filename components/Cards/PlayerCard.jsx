"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

const PlayerCard = ({ player }) => {
  console.log(player);
  const { username, title, online } = player;
  const { rating, progress } = player?.perfs?.classical;

  return (
    <Link className="w-full flex justify-center" href={`/player/${username}`}>
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
        className={`flex w-[90%] items-center justify-between px-4 py-1 rounded-md border mb-1`}
      >
        <div className="flex items-center justify-start">
          {online ? (
            <p className="text-green-500">🟢</p>
          ) : (
            <p className="text-red-500">🟠</p>
          )}

          <p
            className={`ml-2 text-left text-md font-medium ${
              online ? "text-purple-600" : "text-purple-300"
            }`}
          >
            {username}
          </p>
          {title && (
            <p className="ml-2 text-sm text-gray-500">{title ? title : NA}</p>
          )}
        </div>
        <div>
          <p className="text-right text-purple-500 text-md font-bold">
            Rating: {rating}
          </p>
          <p className="text-right text-gray-500">Progress: {progress}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default PlayerCard;
