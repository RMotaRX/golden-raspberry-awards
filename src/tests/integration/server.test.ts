import request from 'supertest';
import app from '../../server';

describe('API de Produtores', () => {
  beforeAll(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('Deve retornar os intervalos corretos', async () => {
    const response = await request(app).get('/api/producers/intervals');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('min');
    expect(response.body).toHaveProperty('max');
  });
});