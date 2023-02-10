import { createTheme } from "@mui/material";
import {blueGrey, yellow} from "@mui/material/colors";

const options = {
    components: {
        MuiDialog: {
          styleOverrides: {
              root: {
                  "& .MuiPaper-root" : {
                      borderRadius: '10px'
                  }
              }
          }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: 'rgba( 255, 255, 255, 0.25 )',
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                    backdropFilter: 'blur( 4px )',
                    borderRadius: '10px',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )'
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                    },
                    "& .MuiTabs-indicator" : {
                        backgroundColor: 'red'
                    }
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                    },
                    "& MuiTabs-indicator" : {
                        backgroundColor: 'red'
                    }
                },
            },
        },

        MuiToolbar: {
            styleOverrides: {
                root: {
                    paddingBlock: '10px'
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    backgroundColor: 'transparent',
                    color: 'black',
                    background: 'rgba( 255, 255, 255, 0.25 )',
                    boxShadow: 'none',
                    backdropFilter: 'blur( 4px )',
                    '-webkit-backdrop-filter': 'blur( 4px )',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )'
                },
            },
        },
        MuiButton: {
            defaultProps: {
            },
            styleOverrides: {
                root: {
                    borderRadius: '100px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    variant: 'link',
                    '&:hover': {
                        backgroundColor: '#A5804A',
                    }
                },

            }
        }
    },
    typography: {
        fontFamily: "'DM Sans', sans-serif",
        secondFontFamily: ''
    },
    palette: {
        primary: {
            main: '#002E5D',
        },
        secondary: {
            main: '#A5804A'
        },
        background: {
            grey: yellow["50"]
        }
    }
}

// @ts-ignore
const theme = createTheme(options);

export default theme
