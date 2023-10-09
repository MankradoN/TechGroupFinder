import { get } from 'axios';
const { getConfig } = require('./config/config-helper');

describe('App Running on localhost:3000', () => {
test('should return a successful response', async () => {
  try {
    const response = await get('http://localhost:3000');
    expect(response.status).toBe(200);
  } catch (error) {
    console.log(error)
    expect(error).toBeNull();
  }
});
})


describe('AppSearchAPIConnector', () => {
  let connector;

  beforeAll(() => {
    // Get configuration values
    const { searchKey, endpointBase, engineName } = getConfig();

    // Create the connector instance
    connector ={
      apiKey: searchKey,
      baseEndpoint: endpointBase,
      engineName,
    };
  });

  it('should have the correct configuration values', () => {
    const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();

    expect(connector.hostIdentifier).toBe(hostIdentifier);
    expect(connector.apiKey).toBe(searchKey);
    expect(connector.baseEndpoint).toBe(endpointBase);
    expect(connector.engineName).toBe(engineName);
  });

});
