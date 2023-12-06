import React from "react";
import UserProfile from "../../../components/UserComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Page = async ({ params }) => {
  const session = await getServerSession(authOptions)
  if (!session){
    redirect("/api/auth/signin")
  }
  
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
  console.log(data)
  if(!data){
    return(
      <>
      <h1>Opps something went wrong</h1>
      </>
    )
  }
  return <UserProfile res={data} />;
};

export default Page;
