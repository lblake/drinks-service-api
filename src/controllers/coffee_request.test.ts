import request from 'supertest';
import { app } from '../app';

test('GET /coffee without a parameter should return correct object', async () => {
  const res = await request(app).get('/coffee');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Latte',
  });
});

test('GET /coffee with a different given coffeeName should return correct object', async () => {
  const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Flat White' });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Flat White',
  });
});
