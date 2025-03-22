"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { CssBaseline } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppThemeContext = (props: any) => {
  const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
      colorSchemeSelector: "class",
    },
  });

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeContext;
