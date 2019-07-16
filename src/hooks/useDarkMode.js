import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    localStorage.getItem("darkMode") ? body.classList.add("dark-mode") : localStorage.getItem("darkMode") ? body.classList.remove("dark-mode")
  }, [darkMode]);

  return [darkMode, setDarkMode];


};
