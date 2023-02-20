import { useEffect, useState } from "react";
import { themeSlice } from "../store/reducers/themeReducer/themeSlice";
import { useAppDispatch, useAppSelector } from "./redux";

export function useTheme() {
  const { theme } = useAppSelector(state => state.theme);
  const { toggleTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  function handleToggle() {
    dispatch(toggleTheme());
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");

    if (savedTheme !== theme) {
      dispatch(toggleTheme());
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, handleToggle };
}
