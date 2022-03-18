import { useState, useLayoutEffect, useContext } from "react";
import { Context } from "../index";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const { currTheme } = useContext(Context);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.removeItem("theme");
    localStorage.setItem("theme", theme);
    currTheme.setAnotherTheme(theme);
  }, [theme]);
  return { theme, setTheme };
};
