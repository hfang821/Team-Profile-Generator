const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{


    it('can set github username',()=>{
        const githubTest = 'hfang821';
        const e = new Engineer('kevin',100,'kevinfang@something.com',githubTest);
        expect(e.github).toBe(githubTest);
    });

    describe('getGithub',()=>{
        it('can get github username by getGithub()',()=>{
            const githubTest = 'hfang821';
            const e = new Engineer('kevin',100,'kevinfang@something.com',githubTest);
            expect(e.getGithub()).toBe(githubTest);
        })
    });

    describe('getRole',()=>{
        it('can get Role by getRole()',()=>{
            const roleTest = 'Engineer';
            const e = new Engineer('kevin',100,'kevinfang@something.com',roleTest);
            expect(e.getRole()).toBe(roleTest);
        })
    });
})