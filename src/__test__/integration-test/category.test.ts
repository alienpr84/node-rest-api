import { Express } from 'express';
import supertest from 'supertest';
import server from '../../app';
import { dbConnection } from '../../config';
import { IDBConnection } from '../../interfaces';

const connection: IDBConnection = dbConnection();
const app: Express = server();

beforeAll(() => {
 connection.open();
});

afterAll(async () => {
  await connection.close();
});

describe('POST /api/categories', () => {
  test('Save a category in the database', async () => {
    await supertest(app)
      .post('/api/categories')
      .set('Accept', 'application/json')
      .send({name: 'Shoes for women'})
      .expect(400);
  });
});

test('Responds with json', async () => {
  await supertest(app)
     .get('/api/categories')
     .set('Accept', 'application/json')
     .expect(200)
     .expect('Content-Type', /application\/json/);
 });




