const { TestScheduler } = require('jest')
const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');

    expect(manager.name).toBe('Scott');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('jscott@d-verse.com');
    expect(manager.officeNumber).toBe('210');
});

test("returns manager's name", () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');
    
    expect(manager.getName()).toEqual(expect.stringContaining('Scott'));
});

test("returns manager's id", () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');

    expect(manager.getId()).toEqual(expect.stringContaining('123'));
});

test("returns manager's email", () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');
    
    expect(manager.getEmail()).toEqual(expect.stringContaining('jscott@d-verse.com'));
});

test("returns manager's role", () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');
    
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test("returns manager's office number", () => {
    const manager = new Manager('Scott', '123', 'jscott@d-verse.com', '210');
    
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('210'));
});