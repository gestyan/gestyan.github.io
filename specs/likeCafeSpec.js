/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteCaffeIdb from '../src/scripts/data/favoritecaffe-idb';

describe('Liking A Caffe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the caffe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    expect(document.querySelector('[aria-label="like this caffe"]')).toBeTruthy();
  });

  it('should not show the unlike button when the caffe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this caffe"]')).toBeFalsy();
  });

  it('should be able to like the caffe', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const caffe = await FavoriteCaffeIdb.getCaffe(1);

    expect(caffe).toEqual({ id: 1 });

    FavoriteCaffeIdb.deleteCaffe(1);
  });

  it('should not add a caffe again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    await FavoriteCaffeIdb.putCaffe({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteCaffeIdb.getAllCaffe()).toEqual([{ id: 1 }]);

    FavoriteCaffeIdb.deleteCaffe(1);
  });

  it('should not add a caffe when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteCaffeIdb.getAllCaffe()).toEqual([]);
  });
});
