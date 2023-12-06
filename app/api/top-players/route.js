import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const url = "https://lichess.org/api/player/top/100/classical";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
};
