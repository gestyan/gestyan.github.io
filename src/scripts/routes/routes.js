import ListOfRestaurants from '../views/pages/list-restaurants';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListOfRestaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
