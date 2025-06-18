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
  "black-metal-bathory": {
    id: "T_008",
    name: "black-metal-bathory",
    colors: {
      body: "#000000",
      scrollHandle: "#1c1c1c",
      scrollHandleHover: "#333333",
      primary: "#a66666",      // base08
      secondary: "#c1c1c1",   // base06
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#1c1c1c",       // base01
      },
    },
  },
  "black-metal-marduk": {
    id: "T_009",
    name: "black-metal-marduk",
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
  "black-metal-immortal": {
    id: "T_010",
    name: "black-metal-immortal",
    colors: {
      body: "#000000",
      scrollHandle: "#1c1c1c",
      scrollHandleHover: "#333333",
      primary: "#5f8787",      // base0D
      secondary: "#aaaaaa",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#1c1c1c",       // base01
      },
    },
  },

  "darkfuneral": {
    id: "T_011",
    name: "darkfuneral",
    colors: {
      body: "#000000",
      scrollHandle: "#1c1c1c",
      scrollHandleHover: "#333333",
      primary: "#5f81a5",      // base0D
      secondary: "#d0dfee",    // base05
      text: {
        100: "#c1c1c1",       // base06
        200: "#5f8787",       // base05
        300: "#aaaaaa",       // base01
      },
    },
  },
 bathory: {
    id: "T_011",
    name: "bathory",
    colors: {
      body: "#000000",
      scrollHandle: "#1c1c1c",
      scrollHandleHover: "#333333",
      primary: "#a66666",      // base08
      secondary: "#c1c1c1",   // base06
      text: {
        100: "#c1c1c1",       // base06
        200: "#aaaaaa",       // base05
        300: "#1c1c1c",       // base01
      },
    },
  },
marduk: {
    id: "T_012",
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
 gorgoroth: {
    id: "T_015",
    name: "gorgoroth",
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

};

export default theme;
