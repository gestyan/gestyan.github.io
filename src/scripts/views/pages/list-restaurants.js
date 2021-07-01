import RestaurantDbSource from '../../data/restaurantdb-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListOfRestaurants = {
  async render() {
    return `
      <section class="content">
        <div class="rest-list">
          <h1 class="rest-list__label">
            Explore Caffe Code
          </h1>
          <div class="rest-list__item" id="rest-list__item">

          </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantList = await RestaurantDbSource.daftarRestoran();
    const restaurantsContainer = document.querySelector('#rest-list__item');
    restaurantList.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    document.getElementById('home-page').classList.add('active__page');
    document.getElementById('favorite-page').classList.remove('active__page');
  },
};

export default ListOfRestaurants;
