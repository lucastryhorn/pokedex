import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;

    colors: {
      primary: string;
      text: string;
      background: string;
      error: string;
      white: string;
      types: {
        bug: string;
        dark: string;
        dragon: string;
        eletric: string;
        fair: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundTypes: {
        bug: string;
        dark: string;
        dragon: string;
        eletric: string;
        fair: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
    };
  }
}
