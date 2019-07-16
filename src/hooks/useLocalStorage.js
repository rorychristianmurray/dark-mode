import React, { useState } from "react";

const useLocalStorage = (key, initial) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, steValue];
};
