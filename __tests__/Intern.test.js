const { TestScheduler } = require('jest')
const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');

    expect(intern.name).toBe('Scott');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('jscott@d-verse.com');
    expect(intern.school).toBe('Vanderbilt');
});

test("returns intern's name", () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');
    
    expect(intern.getName()).toEqual(expect.stringContaining('Scott'));
});

test("returns intern's id", () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');

    expect(intern.getId()).toEqual(expect.stringContaining('123'));
});

test("returns intern's email", () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining('jscott@d-verse.com'));
});

test("returns intern's role", () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("returns intern's school", () => {
    const intern = new Intern('Scott', '123', 'jscott@d-verse.com', 'Vanderbilt');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining('Vanderbilt'));
});