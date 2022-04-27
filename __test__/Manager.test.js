const Manager = require('../lib/Manager');

describe('Manager',()=>{


    it('can set office number',()=>{
        const numberTest = 123;
        const e = new Manager('kevin',100,'kevinfang@something.com',numberTest);
        expect(e.officeNumber).toBe(numberTest);
    });

    describe('getOfficeNumber',()=>{
        it('can get office number by getSchool()',()=>{
            const numberTest = 123;
            const e = new Manager('kevin',100,'kevinfang@something.com',numberTest);
            expect(e.getOfficeNumber()).toBe(numberTest);
        })
    });

    describe('getRole',()=>{
        it('can get Role by getRole()',()=>{
            const roleTest = 'Manager';
            const e = new Manager('kevin',100,'kevinfang@something.com',roleTest);
            expect(e.getRole()).toBe(roleTest);
        })
    });
})