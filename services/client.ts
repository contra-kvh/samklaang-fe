"use client";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SAMKLAANG_BASE_URL;

// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.NEXT_PUBLIC_SAMKLAANG_BASE_URL
//     : "http://localhost:8000";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(BASE_URL, "BASE_URL");

export default client;
