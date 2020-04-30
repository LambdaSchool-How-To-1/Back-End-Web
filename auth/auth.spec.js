const request = require('supertest');

const server = require('../api/server.js');

const db = require('../database/dbConfig.js');

describe('register', () => {

    it("Should be returning a 201", () => {
        return request(server)
        .post('/api/auth/users/register')
        .send({ 
            username: 'Billy',
            password: 'bob'
        })
        .then(res => {
            expect(res.status).toBe(201);
        });
    });

    it('should return a JSON object', async () => {
        const res = await request(server)
        .post('/api/auth/users/register')
        .send({ 
            username: "jimmy",
            password: 'jams'
        });
        expect(res.type).toMatch(/json/i);
    });
});

describe('login', () => {
    it('should return a 200 status from successful login', () => {
        return request(server)
        .post('/api/auth/users/login')
        .send({
            username: 'Billy',
            password: 'bob'
        })
        .then(res => {
            console.log('RES STATUS', res.status)
            expect(res.status).toBe(200);
        });
    });

    it('should return JSON object', async () => {
        const res = await request(server)
        .post('/api/auth/users/login')
        .send({ 
            username: "Jimmy",
            password: 'jams'
        });
        expect(res.type).toMatch(/json/i);
    });
});