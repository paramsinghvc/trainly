import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { BASE_URL, Trains, TrainsService } from '../TrainsService';
import { MOCK_APP_DEP_WITH_DETAILS_FROM_ONLY } from './mockXMLResponse';

let axiosMock = new MockAdapter(axios);

describe('Trains Service', () => {
  let trainsService: TrainsService;
  beforeAll(() => {
    trainsService = new TrainsService();
  });

  it('should fetch data for GetArrDepWithDetails', async () => {
    axiosMock.onPost(BASE_URL).reply(200, MOCK_APP_DEP_WITH_DETAILS_FROM_ONLY);
    const data = await trainsService.fetchData(Trains.Operation.GetArrDepBoardWithDetails, {
      crs: 'KGX',
    });

    expect(data).toMatchSnapshot();
  });
});
