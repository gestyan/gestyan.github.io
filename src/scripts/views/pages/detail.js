import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-resource';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteCaffeIdb from '../../data/favoritecaffe-idb';

const Detail = {
  async render() {
    return `
    <article class="rest-item" id="rest-detail"></article>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#rest-detail');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteCaffes: FavoriteCaffeIdb,
      caffe: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
        addres: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        categories: restaurant.restaurant.categories,
        menus: restaurant.restaurant.menus,
        city: restaurant.restaurant.city,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
