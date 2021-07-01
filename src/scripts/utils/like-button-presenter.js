import { createLikeCaffeButtonTemplate, createUnlikeCaffeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteCaffes, caffe }) {
    this._likeButtonContainer = likeButtonContainer;
    this._caffe = caffe;
    this._favoriteCaffes = favoriteCaffes;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._caffe;

    if (await this._isCaffeExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isCaffeExist(id) {
    const caffe = await this._favoriteCaffes.getCaffe(id);
    return !!caffe;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeCaffeButtonTemplate();

    const likedButton = document.querySelector('#likeButton');
    likedButton.addEventListener('click', async () => {
      await this._favoriteCaffes.putCaffe(this._caffe);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeCaffeButtonTemplate();

    const likedButton = document.querySelector('#likeButton');
    likedButton.addEventListener('click', async () => {
      await this._favoriteCaffes.deleteCaffe(this._caffe.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
