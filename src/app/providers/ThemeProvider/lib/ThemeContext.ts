import { createContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeContextProsps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContex = createContext<ThemeContextProsps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
