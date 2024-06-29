import { createContext, useState } from "react";

export const DataFix = createContext();

export default function CombineData({ children }) {
  const name = "Vishal";
  const value = { name };
  return <DataFix.Provider value={value}>{children}</DataFix.Provider>;
}