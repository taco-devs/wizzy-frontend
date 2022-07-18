import React, { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function CounterDisplay() {
  const [account] = useContext(AppContext);

  return (
    <div>
      <p>{account}</p>
    </div>
  );
}