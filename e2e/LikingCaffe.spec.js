/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('LikingCaffe');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked caffe', ({ I }) => {
  I.see('Belum ada Caffe yang disukai', '#no-favorite');
});

Scenario('liking one caffe', async ({ I }) => {
  I.see('Belum ada Caffe yang disukai', '#no-favorite');

  I.amOnPage('/');

  I.seeElement('.rest-item__title a');

  const firstFilm = locate('.rest-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  await I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.rest-item');

  I.seeElement('h1.rest-item__title');

  const likedFilmTitle = await I.grabTextFrom('h1.rest-item__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unliking one caffe', async ({ I }) => {
  I.see('Belum ada Caffe yang disukai', '#no-favorite');

  I.amOnPage('/');

  I.seeElement('.rest-item__title a');

  const firstFilm = locate('.rest-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  await I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.rest-item');

  I.seeElement('h1.rest-item__title');

  const likedFilmTitle = await I.grabTextFrom('h1.rest-item__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click(firstFilm);

  await I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Belum ada Caffe yang disukai', '#no-favorite');
});
