const Intern = require('../lib/Intern');

describe('Intern',()=>{


    it('can set school name',()=>{
        const schoolTest = 'western';
        const e = new Intern('kevin',100,'kevinfang@something.com',schoolTest);
        expect(e.school).toBe(schoolTest);
    });

    describe('getSchool',()=>{
        it('can get school name by getSchool()',()=>{
            const schoolTest = 'western';
            const e = new Intern('kevin',100,'kevinfang@something.com',schoolTest);
            expect(e.getSchool()).toBe(schoolTest);
        })
    });

    describe('getRole',()=>{
        it('can get Role by getRole()',()=>{
            const roleTest = 'Intern';
            const e = new Intern('kevin',100,'kevinfang@something.com',roleTest);
            expect(e.getRole()).toBe(roleTest);
        })
    });
})