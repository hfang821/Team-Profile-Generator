const Employee = require('../lib/Employee');

describe('Employee',()=>{
    it('can initialize a new employee', ()=>{
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('can set name',()=>{
        const nameTest = 'kevin';
        const e = new Employee(nameTest);
        expect(e.name).toBe(nameTest);
    });

    it('can set id',()=>{
        const idTest = 100;
        const e = new Employee('kevin',idTest);
        expect(e.id).toBe(idTest);
    });

    it('can set email',()=>{
        const emailTest = 'kevinfang@something.com';
        const e = new Employee('kevin',100,emailTest);
        expect(e.email).toBe(emailTest);
    });

    describe('getName',()=>{
        it('can get name by getName()',()=>{
            const nameTest = 'kevin';
            const e = new Employee(nameTest,100,'kevinfang@something.com');
            expect(e.getName()).toBe(nameTest);
        })
    });

    describe('getId',()=>{
        it('can get id by getId()',()=>{
            const idTest = 100;
            const e = new Employee('kevin',idTest,'kevinfang@something.com');
            expect(e.getId()).toBe(idTest);
        })
    });

    describe('getEmail',()=>{
        it('can get email by getEmail()',()=>{
            const emailTest = 'kevinfang@something.com';
            const e = new Employee('kevin',100,emailTest);
            expect(e.getEmail()).toBe(emailTest);
        })
    });
})