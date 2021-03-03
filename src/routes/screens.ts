import Login from '../pages/Login';
import ListPokemons from '../pages/ListPokemons';
import DetailsPokemon from '../pages/DetailsPokemon';

const noAuthSreens = {
  Login,
};

const authScreens = {
  ListPokemons,
  DetailsPokemon,
};

export { noAuthSreens, authScreens };
