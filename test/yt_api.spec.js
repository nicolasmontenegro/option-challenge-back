const app = require('../app')
const { expect } = require('chai');
var should = require('chai').should()
const supertest = require('supertest')
const request = supertest(app)

const searchQuery = 'Hello world'

it('Test Youtube Endpoint: empty', async done => {
  // Sends GET Request to /test endpoint
  await request
    .get('/yt')
    .expect(500)
  done()
})

it('Test Youtube Endpoint: Basic request', async done => {
  // Sends GET Request to /test endpoint
  await request
    .get(`/yt?searchQuery=${searchQuery}`)
    .set('Accept', 'application/json')
    .expect(
      200) 
  done()
})

it('Test Youtube Endpoint: Basic request & next page', async done => {
  // Sends GET Request to /test endpoint
  var nextPageToken = ''
  await request
    .get(`/yt?searchQuery=${searchQuery}`)
    .set('Accept', 'application/json')
    .expect(200)
    .then((res) => {
      expect(res.body).to.have.property('nextPageToken')
      expect(res.body).to.have.property('pageInfo')
      expect(res.body).to.have.property('items')
      res.body.items.should.be.a('array')
    })
  await request
    .get(`/yt?searchQuery=${searchQuery}&pageToken=${nextPageToken}`)
    .set('Accept', 'application/json')
    .expect(200)
    .then((res) => {
      expect(res.body).to.have.property('nextPageToken')
      expect(res.body.nextPageToken).should.not.equal(nextPageToken)
    })
  done()
})
