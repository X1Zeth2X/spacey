import { ApiService, apiKey } from './api.service';

class APODError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
  }
}

const APODService = {
  async getAPOD() {
    const resource: string = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
      const response = await ApiService.get(resource);

      return response.data;
    } catch (error) {
      throw new APODError(error.response.message);
    }
  }, // Get Astonomy Picture of the Day.
};

export default APODService;

export { APODService, APODError };
