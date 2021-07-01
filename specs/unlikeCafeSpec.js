/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteCaffeIdb from '../src/scripts/data/favoritecaffe-idb';

const addLikeButtonContainer = () => {
  document.body.innerHtml = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Caffe', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCaffeIdb.putCaffe({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteCaffeIdb.deleteCaffe(1);
  });

  it('should display unlike widget when the caffe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this caffe"]')).toBeTruthy();
  });

  it('should not display like widget when the caffe has liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    expect(document.querySelector('[aria-label="like this caffe"]')).toBeFalsy();
  });

  it('should be able to remove liked caffe from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });
    document.querySelector('[aria-label="unlike this caffe"]').dispatchEvent(new Event('click'));

    expect(await FavoriteCaffeIdb.getAllCaffe()).toEqual([]);
  });

  it('should not throw error if the unlike caffe is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCaffe({ id: 1 });

    await FavoriteCaffeIdb.deleteCaffe(1);

    document.querySelector('[aria-label="unlike this caffe"]').dispatchEvent(new Event('click'));

    expect(await FavoriteCaffeIdb.getAllCaffe()).toEqual([]);
  });
});
