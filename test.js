let Rectangle = require('./app.js'),
    assert = require('assert');

describe('rectangle', function () {
    it('calculates area', function () {
        let r = new Rectangle(10,10);
        assert.ok(r.area === 100);
    });
});
