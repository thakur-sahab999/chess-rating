import React from "react";
import UserProfile from "../../../components/UserComponent";

const Page = async ({ params }) => {
  const { slug } = params;
  const playerId = slug
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/player/${playerId}/rating-history`
  );

  if (!response.ok) {
    const error = new Error(`Error fetching data: ${response.status}`);
    throw error;
  }
  const data = await response.json();
  return <UserProfile res={data} />;
};

export default Page;
