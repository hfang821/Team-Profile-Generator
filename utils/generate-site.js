//This page is obsolete and will be removed.
const fs = require('fs');
const fileContent = require('../index');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err=> {
            if(err){
                //if error: reject the promise and send the error to the promise's catch method.
                reject(err);
                return;
            }

            //resolve the promise if everything went fine.
            resolve({
                ok: true,
                message: 'file created successfully!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src.style.css', './dist/style.css', err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'stylesheet attached successfully!'
            }); 
        });
    });
};

//module.exports = {writeFile, copyFile};