export type LoginType = {
  email: string;
  password: string;
};

export type UserType = {
  user: string;
};

export type Error = {
  message?: string;
};

export type Modal = {
  open: boolean;
  message?: string;
};

export type ListPokemonsType = {
  offset: number;
  data: Array<PokemonType>;
  isLast: boolean;
};

export type PokemonType = {
  name: string;
  image: string;
  types?: Array<PokemonTypesType>;
  stats?: Array<PokemonStatsType>;
};

export type PokemonTypesType = {
  slot: number;
  type: {
    name: string;
  };
};

export type PokemonStatsType = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};
