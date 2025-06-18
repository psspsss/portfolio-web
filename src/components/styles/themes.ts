import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#00ff9c",
      secondary: "#60fdff",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#76ff9f",
      },
    },
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#323232",
      scrollHandle: "#5b5b5b",
      scrollHandleHover: "#393939",
      primary: "#E1E48B",
      secondary: "#A5C260",
      text: {
        100: "#F7F7F7",
        200: "#EEEEEE",
        300: "#5b5b5b",
      },
    },
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#000000",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#E5E500",
      secondary: "#04A500",
      text: {
        100: "#01FF00",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  "ubuntu": {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#80D932",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
  "black-metal": {
    id: "T_007",
    name: "black-metal",
    colors: {
      body: "#000000",
      scrollHandle: "#222125",
      scrollHandleHover: "#444444",
      primary: "#5f8787",      // base0D
      secondary: "#aaaaaa",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#222125",       // base01
      },
    },
  },

  "darkfuneral": {
    id: "T_009",
    name: "darkfuneral",
    colors: {
      body: "#060f23",
      scrollHandle: "#FED6AB",
      scrollHandleHover: "#d0dfee",
      primary: "#FED6AB",      // base0D
      secondary: "#d0dfee",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#5f8787",       // base05
        300: "#aaaaaa",       // base01
      },
    },
  },
  "bathory": {
    id: "T_010",
    name: "bathory",
    colors: {
      body: "#3E2018",
      scrollHandle: "#1c1c1c",
      scrollHandleHover: "#333333",
      primary: "#e78a43",      // base08
      secondary: "#fbcb97",   // base06
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#a66666",       // base01
      },
    },
  },
  "marduk": {
    id: "T_011",
    name: "marduk",
    colors: {
      body: "#000000",
      scrollHandle: "#222125",
      scrollHandleHover: "#444444",
      primary: "#888888",      // base0D
      secondary: "#999999",    // base0E
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#222125",       // base01
      },
    },
  },
  "gorgoroth": {
    id: "T_012",
    name: "gorgoroth",
    colors: {
      body: "#000000", //#2a2325
      scrollHandle: "#888888",
      scrollHandleHover: "#444444",
      primary: "#ddeecc",      // base0D
      secondary: "#9b8d7f",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#222125",       // base01
      },
    },
  },

  "khold": {
    id: "T_013",
    name: "khold",
    colors: {
      body: "#2B1111", //#39121b
      scrollHandle: "#888888",
      scrollHandleHover: "#444444",
      primary: "#eceee3",      // base0D
      secondary: "#974b46",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#222125",       // base01
      },
    },
  },
  "burzum": {
    id: "T_014",
    name: "burzum",
    colors: {
      body: "#231c14", //#39121b
      scrollHandle: "#ddeecc",
      scrollHandleHover: "#99bbaa",
      primary: "#ddeecc",      // base0D
      secondary: "#99bbaa",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#222125",       // base01
      },
    },
  },
  "ridethelightning": {
    id: "T_015",
    name: "ridethelightning",
    colors: {
      body: "#20173B", //#39121b
      scrollHandle: "#756482",
      scrollHandleHover: "#A8A1DE",
      primary: "#756482",      // base0D
      secondary: "#A8A1DE",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#A8A1DE",       // base01
      },
    },
  },
  "bsod": {
    id: "T_016",
    name: "bsod",
    colors: {
      body: "#0000ff", //#39121b
      scrollHandle: "#756482",
      scrollHandleHover: "#A8A1DE",
      primary: "#ebebff",      // base0D
      secondary: "#ffffff",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#a4a4ff",       // base01
      },
    },
  },

  matrix: {
    id: "T_017",
    name: "matrix",
    colors: {
      body: "#000000", //#39121b
      scrollHandle: "#00ff2b",
      scrollHandleHover: "#009a22",
      primary: "#00ff2b",      // base0D
      secondary: "#009a22",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#00ff2b",       // base01
      },
    },
  },

  immortal: {
    id: "T_018",
    name: "immortal",
    colors: {
      body: "#1b161f", //#39121b
      scrollHandle: "#7799bb",
      scrollHandleHover: "#556677",
      primary: "#7799bb",      // base0D
      secondary: "#556677",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#00ff2b",       // base01
      },
    },
  },

   gruvboxdark: {
    id: "T_019",
    name: "gruvboxdark",
    colors: {
      body: "#32302f", //#39121b
      scrollHandle: "#8ec07c",
      scrollHandleHover: "#458588",
      primary: "#cc241d",      // base0D
      secondary: "#d79921",    // base05
      text: {
        100: "#ebdbb2",       // base06
        200: "#aaaaaa",       // base05
        300: "#00ff2b",       // base01
      },
    },
  },
  everforestlight: {
    id: "T_019",
    name: "everforestlight",
    colors: {
      body: "#f2efdf", //#39121b
      scrollHandle: "#e67e80",
      scrollHandleHover: "#7a8478",
      primary: "#e67e80",      // base0D
      secondary: "#7a8478",    // base05
      text: {
        100: "#7a8478",       // base06
        200: "#859289",       // base05
        300: "#00ff2b",       // base01
      },
    },
  },
};

export default theme;
