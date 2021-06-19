import { Theme } from './types';

export const colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  optionBgColorActive: '#B2D4FF',
  optionBgColorFocus: '#DEEBFF',

  danger: '#DE350B',
  dangerLight: '#FFBDAD',

  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  ctrlBgColorFocusHover: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  placeholderColor: 'hsl(0, 0%, 50%)',
  indicatorColorFocus: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  inputTextColor: 'hsl(0°, 100%, 50%)',
  neutral90: 'hsl(0, 0%, 10%)',
};

const borderRadius = 4;
// Used to calculate consistent margin/padding on elements
const baseUnit = 4;
// The minimum height of the control
const controlHeight = 38;
// The amount of space between the control and menu */
const menuGutter = baseUnit * 2;

export const spacing = {
  baseUnit,
  controlHeight,
  menuGutter,
};

export const defaultTheme: Theme = {
  borderRadius,
  colors,
  spacing,
};

export type ThemeConfig = Theme | ((theme: Theme) => Theme);
