import { createTheme, responsiveFontSizes } from "@material-ui/core";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#983fb5',
      },
      secondary: {
        main: '#00c7f5',
      },
    },

    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 13,
      h1: {
        lineHeight: 0.9,
        color: "#333333",
        letterSpacing: -2,
        fontWeight: "bold",
      },
      h2: {
        fontWeight: "200",
      },
      h4: {
        fontWeight: "600",
        letterSpacing: -1.02,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            overscrollBehaviorY: "none",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "120%",
            backgroundColor: "#dbcaff"
          },
          "*": {
            scrollbarWidth: "thin",
          },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {},
          "*::-webkit-scrollbar-corner": {
            // this hides an annoying white box which appears when both scrollbars are present
            backgroundColor: "transparent",
          },
        },
      },
      MuiInputBase: {
        root: {
          borderColor: "#C26BFE",
        }
      },
      MuiDivider: {
        root: {
          margin: "0px",
          flexShrink: "0",
          borderWidth: "0px 0px thin",
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }
      },
      MuiAccordion: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
      MuiAlert: {
        root: {
          border: "1px solid",
          background: "unset"
        },
      },
      MuiButton: {
        root: {},
        containedSizeSmall: {
          background: 'rgba(255, 255, 255, .3)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
        outlinedSizeSmall: {
          background: 'rgba(255, 255, 255, .3)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
      MuiLink: {
        root: {},
      },
      MuiPaper: {
        root: {
          background: "linear-gradient(45deg, #C26BFE63 30%, #FF538B6B 90%);",
          borderRadius: "4px",
        }
      },
      MuiStepper: {
        root: {
          backgroundColor: "transparent",
          padding: 0,
        },
      },
      MuiStep: {
        vertical: {
          backgroundColor: "rgba(255,255,255,.07)",
          backdropFilter: "blur(4px)",
          padding: "32px 32px 16px",
        },
      },
      MuiStepConnector: {
        lineVertical: {
          borderLeftWidth: 0,
        },
      },
      MuiStepContent: {
        root: {
          borderLeftWidth: 0,
          marginLeft: 0,
          paddingLeft: 0,
        },
      },
      MuiStepLabel: {
        label: {
          textTransform: "uppercase",
          "&.MuiStepLabel-alternativeLabel": { textTransform: "none" },
          "&.MuiStepLabel-active": {},
          "&.MuiStepLabel-completed": {},
        },
      },
      MuiTabs: {
        root: {},
        indicator: {
          height: "100%",
          zIndex: -1,
        },
      },
      MuiTab: {
        root: {
          fontWeight: "bold",
          fontSize: 18,
          padding: 12,
          letterSpacing: "-0.69px",
          textTransform: "none",
        },
        textColorInherit: {
          opacity: 1,
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: "none",
        },
      },
    },
  })
);
