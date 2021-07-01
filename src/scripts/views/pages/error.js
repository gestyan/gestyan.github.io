const Error = {
  async render() {
    return `
        <section class="content">
            <div class="rest-list" id="error">
              <h1>Something Wrong :'(</h1>
            </div>
        </section>
        `;
  },

  async afterRender() {
    document.getElementById('home-page').classList.remove('active__page');
    document.getElementById('favorite-page').classList.remove('active__page');
  },
};

export default Error;
