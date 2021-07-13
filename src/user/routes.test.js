describe('GET /', function () {
    it('should respond with "hello!"', function (done) {
      request(require('./routes.js'))
        .get('/')
        .expect(200, function (err, res) {
          expect(res.body).to.equal({ data: 'hello!' });
          done();
        });
    });
  });