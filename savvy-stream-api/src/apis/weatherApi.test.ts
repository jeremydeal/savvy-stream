import { getForecast } from './weatherApi';

// see: https://jestjs.io/docs/en/tutorial-async
describe('getForecast', () => {
  it('works', async () => {
    expect.assertions(1);
    const result = await getForecast();
    console.log(result);
    expect(result).not.toBeNull();
  });
});
