const handlers = require('../handlers');

// Home Page test
test('home page render', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.home(req,res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

// 404 Error page test
test('404 handler renders', () => { 
    const req = {};
    const res = {render: jest.fn()}
    handlers.notFound(req,res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('404')
});

// 500 Internal Server error test
test('500 handler renders', ()=>{
    const err = new Error('Some error');
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    handlers.serverError(err,req,res,next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('500');
});