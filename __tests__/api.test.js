process.env.NODE_ENV = 'test'
const request = require("supertest");
const app = require("../server");
const db = require('../db/index')


beforeAll(async () => {
    await db.query(`CREATE TABLE students(id SERIAL PRIMARY KEY, name TEXT)`)
})

beforeEach(async () => {
    await db.query(`INSERT into students(name) VALUES ('dami'), ('funmi')`)
})




// afterAll(async () => {
//     await db.query('DROP TABLE students')
//     db.end()
// })

describe('GET /', () => {
    test('get students', async () => {
        const response = await request(app).get('/')
        expect(response.body).toEqual(["dami", "funmi", "gbemi", "kola"])
        expect(response.statusCode).toBe(200)
    })
})