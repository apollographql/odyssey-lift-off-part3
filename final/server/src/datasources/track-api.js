const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(id) {
    return this.get(`track/${id}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(id) {
    return this.get(`module/${id}`);
  }
}

module.exports = TrackAPI;
