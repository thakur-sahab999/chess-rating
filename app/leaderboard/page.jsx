import React from "react";
import LeaderBoard from "../../components/Leaderboard";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/player/[...slug]/route";

const Page = async () => {
  
  const response = await fetch(`${process.env.API_BASE_URL}/api/top-players`);

  if (!response.ok) {
    const error = new Error(`Error fetching data: ${response.status}`);
    throw error;
  }
  const data = await response.json();

  if (data) {
    return (
      <>
        <LeaderBoard res={data} />;
      </>
    );
  } else {
    return <div>Sorry Something Went wrong</div>;
  }
};

export default Page;
