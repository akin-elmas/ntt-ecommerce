import React, { ReactNode } from "react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";

type Props = {
  children: ReactNode;
};

declare module "@mui/material/styles" {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface TypeColor {
    Darkest?: string;
    White?: string;
  }

  interface PaletteOptions {
    Ink: TypeColor;
    Sky: TypeColor;
    Red: TypeColor;
  }

  interface TypeBackground {
    opposite: string;
  }
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h5: {
        fontSize: "1.125rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1280,
        xl: 1440,
      },
    },
    palette: {
      primary: {
        main: "#0059BC",
      },
      background: {
        default: "#FFFFFF",
      },
      Ink: {
        Darkest: "#000000",
        White: "#FFFFFF",
      },
      Sky: {
        Darkest: "#0059BC",
        White: "#00B4DB",
      },
      Red: {
        Darkest: "#E60000",
        White: "#FF0000",
      },

      grey: {
        400: "#F4F5F6",
        600: "#89919A",
      },
    },
  } as ThemeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
