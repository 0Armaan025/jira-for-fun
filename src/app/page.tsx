"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import HomePage from "@/home/HomePage";

export default function Home() {

  const { resolvedTheme, theme, setTheme } = useTheme();

  console.log(resolvedTheme);

  const changeTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }


  return (
    <>
      <HomePage theme={resolvedTheme || ""} changeTheme={changeTheme} />
    </>
  );
}
