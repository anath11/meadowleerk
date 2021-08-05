const handlers = require('../handlers');

// Home Page test
test('home page render', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.home(req,res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

// About page test

