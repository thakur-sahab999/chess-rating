import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const params = req.url;
  const playerId = parseIdFromUrl(params);
  const url = `https://lichess.org/api/user/${playerId}/perf/classical`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
};

function parseIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}
