import { get } from 'axios';
test('Check if app is running on localhost:3000', async () => {
  try {
    const response = await get('http://localhost:3000');
    expect(response.status).toBe(200);
  } catch (error) {
    console.log(error)
    expect(error).toBeNull();
  }
});




