import { getAirQuality } from './airQualityApi';

// see: https://jestjs.io/docs/en/tutorial-async
describe('getAirQuality', () => {
  it('works', async () => {
    expect.assertions(1);
    const result = await getAirQuality('84010', new Date(2019, 11, 15));
    console.log(result);
    expect(result).not.toBeNull();
  });
});
