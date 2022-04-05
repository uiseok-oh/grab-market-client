export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-oh.herokuapp.com"
    : "http://localhost:8080";
