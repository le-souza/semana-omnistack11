const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll( async () => {
    await connection.destroy();
  })
  
  it('should be able to create a new ONG', async () => {
    
    const response = await request(app)
      .post('/ongs')
      //.set('Authorization', 'xyz') //Setar um header
      .send({
        name:     "APAD 4",
        email:    "apad@exemplo.com",
        whatsapp: "11999900009",
        city:     "Curitiba",
        uf:       "SC"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
});