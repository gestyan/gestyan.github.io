/* eslint-disable import/named */
/* eslint-disable no-undef */
import { itActsAsFavoriteCaffeModel } from './contract/favoriteCaffeContract';
import FavoriteCaffeIdb from '../src/scripts/data/favoritecaffe-idb';

describe('Favorite Caffe Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteCaffeIdb.getAllCaffe()).forEach(async (caffe) => {
      await FavoriteCaffeIdb.deleteCaffe(caffe.id);
    });
  });

  itActsAsFavoriteCaffeModel(FavoriteCaffeIdb);
});
