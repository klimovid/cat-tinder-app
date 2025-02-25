import Api, { IApiListResponse } from '../../../Api';

import { ICatData, IEnrichedCatData } from './CatsData';

export default class CatsApi {
  constructor(
    private deps: {
      api: Api;
    },
  ) {}

  async fetchList(): Promise<Array<ICatData>> {
    const response = await this.deps.api.get<ICatData[]>(
      `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1`,
    );

    if (!response) {
      throw Error('Failed to fetch cats');
    }

    return response;
  }

  async getById(id: string): Promise<IEnrichedCatData> {
    const response = await this.deps.api.get<IEnrichedCatData>(
      `https://api.thecatapi.com/v1/images/${id}`,
    );

    if (!response) {
      throw Error('Failed to fetch cats');
    }

    return response;
  }

  async voteUp(id: string): Promise<{}> {
    const response = await this.deps.api.post<IApiListResponse<{}>>(
        `https://api.thecatapi.com/v1/votes`,
        {
          'image_id': id,
          'value': 1
        }
      );
  
      if (!response.results) {
        throw Error('Failed to vote for cat');
      }
  
      return response.results;
  }
}