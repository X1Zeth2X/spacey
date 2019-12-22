import { ApiService, apiKey } from './api.service';

class IVLError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
  }
}

interface SearchParams {
  query: string;
  page: number;
  // description: string | null;
  // keywords: string | null;
}

const IVLService = {
  async search(options: SearchParams) {
    const resource: string = `https://images-api.nasa.gov/search?q=${options.query} \
    &page=${options.page}`;

    try {
      const response = await ApiService.get(resource);

      return response.data.collection;
    } catch (error) {
      throw new IVLError(error.response.message);
    }
  }, // Search

  async getPopular() {
    const resource: string = 'https://images-assets.nasa.gov/popular.json';

    try {
      const response = await ApiService.get(resource);

      return response.data.collection;
    } catch (error) {
      throw new IVLError(error.response.message);
    }
  }, // Get popular pictures/videos.

  async getRecent() {
    const resource: string = 'https://images-assets.nasa.gov/recent.json';

    try {
      const response = await ApiService.get(resource);

      return response.data.collection;
    } catch (error) {
      throw new IVLError(error.response.message);
    }
  }, // Get recent pictures/videos.
};

export default IVLService;

export { IVLService, IVLError, SearchParams };
