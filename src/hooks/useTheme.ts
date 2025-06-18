import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.gorgoroth);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: string) => {
    if (themes[mode]) {
      setToLS("tsn-theme", mode);
      setTheme(themes[mode]);
    }
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    localThemeName && themes[localThemeName]
      ? setTheme(themes[localThemeName])
      : setTheme(themes.gorgoroth);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
