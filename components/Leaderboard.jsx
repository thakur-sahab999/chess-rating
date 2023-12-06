"use client";
import React, { useState, useEffect } from "react";
import RatingChart from "./RatingChart";
import PlayerCard from "./Cards/PlayerCard";

const Leaderboard = ({ res }) => {
  const [players, setPlayers] = useState(res.users);
  const [filters, setFilters] = useState({ title: "", online: false });
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10; // Adjust as needed

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const filteredPlayers = players?.filter(
    (player) =>
      !filters?.title ||
      player?.title?.toLowerCase() === filters?.title?.toLowerCase()
  );

  // Logic to get current players based on pagination
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers?.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );

  // Logic to render page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredPlayers?.length / playersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen mt-[60px] bg-gray-100">
      <div className="container mx-auto px-2 py-8">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-4 text-purple-800 text-center">
          Lichess Top 100 Classical
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Data as of {new Date().toLocaleDateString()}
        </p>



        <div className="w-full flex flex-col items-end  justify-between md:flex-row space-y-8 md:space-y-0">
          <div className="w-full h-full flex justify-center px-2 md:w-1/2 mb-4 md:mb-0">
            {players && <RatingChart data={filteredPlayers} />}
          </div>
          <div className="w-full px-2 md:w-1/2 overflow-x-auto">
           
            <div className="w-[100%] flex justify-center mb-4">
              {/* <label
                htmlFor="titleFilter"
                className="text-gray-700 text-sm md:text-base"
              >
                Filter by Title:
              </label> */}
              <select
                id="titleFilter"
                name="title"
                onChange={handleFilterChange}
                className="w-[90%] rounded-md bg-white border px-4 py-3"
              >
                <option value="">All</option>
                <option value="IM">International Master</option>
                <option value="FM">FIDE Master</option>
              </select>
            </div>
            <ul className=" w-full flex flex-col   items-center">
              {currentPlayers?.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </ul>

            <ul className="flex justify-center w-[100%]  mt-6">
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  className={`cursor-pointer mx-1 text-sm px-2 md:px-2 lg:px-4 py-1 border rounded ${
                    number === currentPage
                      ? "bg-purple-800 text-white"
                      : "bg-purple-500 text-gray-800"
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
