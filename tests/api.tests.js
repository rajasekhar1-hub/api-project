const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET / responds with running message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Task API Running');
  });
});
