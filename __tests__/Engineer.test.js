const { TestScheduler } = require('jest')
const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');

    expect(engineer.name).toBe('Scott');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('jscott@d-verse.com');
    expect(engineer.github).toBe('jscottrumptz');
});

test("returns engineer's name", () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');
    
    expect(engineer.getName()).toEqual(expect.stringContaining('Scott'));
});

test("returns engineer's id", () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');

    expect(engineer.getId()).toEqual(expect.stringContaining('123'));
});

test("returns engineer's email", () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');
    
    expect(engineer.getEmail()).toEqual(expect.stringContaining('jscott@d-verse.com'));
});

test("returns engineer's role", () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("returns engineer's github", () => {
    const engineer = new Engineer('Scott', '123', 'jscott@d-verse.com', 'jscottrumptz');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining('jscottrumptz'));
});