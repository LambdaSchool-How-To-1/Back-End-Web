const request = require('supertest');

const server = require('../api/server.js');

const db = require('../database/dbConfig.js');

describe('register', () => {
    it('should return a JSON object', async () => {
        const res = await request(server)
        .post('/api/auth/users/register')
        .send({ 
            username: "test",
            password: 'test'
        });
        expect(res.type).toMatch(/json/i);
    });
});

    it('should return JSON object', async () => {
        const res = await request(server)
        .post('/api/auth/users/login')
        .send({ 
            username: "test",
            password: 'test'
        });
        expect(res.type).toMatch(/json/i);
    });

    

describe("auth-router", () => {

    describe("POST /register", () => {
      it("should return status 201", () => {
        request(server)
          .post("/register")
          .send({ username: "test", password: "password" })
          .then((res) => {
            expect(res.status).toBe(201);
          });
      });
      
      it("should return res.body.password = hash", () => {
        request(server)
          .post("/register")
          .send({ username: "test", password: "password" })
          .then((res) => {
            expect(res.body.password).toBe(password);
          });
      });
    });
  });