const UrlParser = {
  parseActiveWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSpillter(url);
    return this._urlCombiner(splittedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSpillter(url);
  },

  _urlSpillter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/')
        + (splittedUrl.id ? '/:id' : '')
        + (splittedUrl.verb ? `/${splittedUrl.verb}` : '');
  },
};

export default UrlParser;
