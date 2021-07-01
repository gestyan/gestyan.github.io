import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const {
    name,
    rating,
    address,
    pictureId,
    categories,
    menus,
    city,
    customerReviews,
  } = restaurant;

  const listCategories = [];
  categories.forEach((n) => {
    listCategories.push(n.name);
  });

  const foodsList = [];
  menus.foods.forEach((n) => {
    foodsList.push(n.name);
  });

  const drinksList = [];
  menus.drinks.forEach((n) => {
    drinksList.push(n.name);
  });

  let reviews = '';
  customerReviews.forEach((n) => {
    reviews += `<p><b>( ${n.name} )</b> : " ${n.review}." </p>`;
  });

  return `
  <img class="rest-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
      <div class="rest-detail__content">
        <h1 class="rest-detail__title">${name}</h1>
        <p class="rest-detail__rating"><b>Rating : </b> ${rating} </p>
        <p class="rest-detail__address"><b>Alamat : </b> ${address}, ${city}</p>
        <div class="rest-detail__address">
          <p><b>Kategori Menu : </b> ${listCategories.join(', ')}</p>
          <p><b>Menu Makanan : </b> <br>${foodsList.join(', ')}</p>
          <p><b>Menu Minuman : </b> <br>${drinksList.join(', ')}</p>
          <div class="rest-detail__riview">
            <h3>Riview Pelanggan</h3>
            <div class="rest_detail__riview-container">${reviews}</div>
          <div>
        </div>
      </div>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
<article class="rest-item">
<img class="rest-item__thumbnail lazyload" src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}">
<div class="rest-item__content">
  <h1 class="rest-item__title">
    <a href="${`/#/detail/${restaurant.id}`}">
        ${restaurant.name} (${restaurant.city})
    <a/>
  </h1>
  <p class="rest-item__rating"><b>Rating : </b> ${restaurant.rating} </p>
  <p class="rest-item__desc">
    ${restaurant.description}
  </p>
</div>
</article>`;

const createLikeCaffeButtonTemplate = () => `
  <button aria-label="like this caffe" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeCaffeButtonTemplate = () => `
  <button aria-label="unlike this caffe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeCaffeButtonTemplate,
  createUnlikeCaffeButtonTemplate,
};
