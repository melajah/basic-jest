const app = require('../app');
const request = require('supertest');

describe('CRUD TODO', function () {  

    const todo = {
        title: "learning jest",
        description: "lets learing jest"
    }

    describe('success response', function () {
        it.only('should send object with status code 201', function (done) {
            request(app)
                .post('/todos')
                .send(todo)
                .then(res => {
                    console.log(res.statusCode)
                    console.log(res.body)
                    expect(res.status).toBe(201)
                    expect(res.body).toHaveProperty("title", todo.title)
                    expect(res.body).toHaveProperty("description", todo.description)
                    done()
                })
                .catch(console.log)
        })

        it('should send arrays with status code 200', function (done) {
            request(app)
                .get('/todos')
                .then(res => {
                    expect(res.statusCode).toEqual(200)
                    expect(res.body).toEqual(expect.arrayContaining([todo]))
                    expect(res.body[0]).toMatchObject(todo)
                    expect(res.body[0]).toHaveProperty("title", todo.title)
                    expect(res.body[0]).toHaveProperty("description", todo.description)
                    done()
                })
                .catch(console.log)
        })

    })

    // describe('errors response')
})