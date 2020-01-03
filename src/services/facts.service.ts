import { ApiService } from './api.service';

class FactsError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
  }
}

const FactService = {
  async getFacts() {
    const resource: string = 'https://spacey-api.herokuapp.com/facts/get';

    try {
      const response = await ApiService.get(resource);

      return response.data.facts;
    } catch (error) {
      throw new FactsError(error.response.message);
    }
  },
};

export default FactService;

export { FactService, FactsError };
