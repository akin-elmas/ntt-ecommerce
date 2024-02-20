import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = createTheme(
    {
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
      },
    },
    {
      header: {
        linkColor: "#6A6D70",
        background: "#FFFFFF",
        border: {
          color: "#89919A",
        },
        moreButton: {
          background: "#F4F5F6",
        },
        searchBar: {
          color: "#74777A",
        },
        selectBox: {
          color: "#32363a",
          background: "#f4f5f6",
          border: "#0059bc",
          icon: "#000000",
          dropdown: {
            background: "#00254f",
            hoverBackground: "#0059bc",
            color: "#ffffff",
            selectedBackground: "#e6eef8",
          },
        },
      },
      main: {
        page: {
          titleColor: "#000000",
        },
        productCard: {
          titleColor: "#00254F",
          textBackground: "#E6EEF8",
        },
        moreButton: {
          color: "#FFFFFF",
        },
        switchButton: {
          border: "#0059BC",
          color: {
            default: "#ffffff",
            second: "#0059bc",
          },
          background: {
            default: "#0059bc",
            second: "#ffffff",
          },
          hoverBackground: {
            default: "#F6FAFD",
            second: "#264d91",
          },
        },
      },
      footer: {
        color: "#FFFFFF",
        background: "#0059BC",
        signUpButton: {
          color: "#FFFFFF",
          background: "#00254f",
        },
      },
    } as ThemeOptions
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
