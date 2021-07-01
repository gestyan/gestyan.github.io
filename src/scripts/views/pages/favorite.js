import FavoriteCaffeIdb from '../../data/favoritecaffe-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
        <div class="rest-list">
          <h1 class="rest-list__label">
            Favorite Caffe Code
          </h1>
          <div class="rest-list__item" id="rest-list__item">

          </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantList = await FavoriteCaffeIdb.getAllCaffe();
    const restaurantsContainer = document.querySelector('#rest-list__item');
    if (restaurantList.length) {
      restaurantList.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = '<div id="no-favorite"><h3>Belum ada Caffe yang disukai</h3></div>';
    }

    document.getElementById('favorite-page').classList.add('active__page');
    document.getElementById('home-page').classList.remove('active__page');
  },
};

export default Favorite;
