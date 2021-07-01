/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteCaffeIdb from '../../src/scripts/data/favoritecaffe-idb';

const createLikeButtonPresenterWithCaffe = async (caffe) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteCaffes: FavoriteCaffeIdb,
    caffe,
  });
};

export { createLikeButtonPresenterWithCaffe };
