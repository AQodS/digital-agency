"use client";
import { useColorScheme } from "@mui/material";
import { Fragment} from "react";

export const ToggleThemeButton = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Fragment>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <select value={mode} onChange={(e) => setMode(e.target.value as any)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </Fragment>
  );
};

