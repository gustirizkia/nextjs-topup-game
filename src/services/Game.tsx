import axios from "axios";
import React from "react";

export default async function Game() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos/");

  return data;
}
