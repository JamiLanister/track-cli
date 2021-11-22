const fs = require('fs');

class CreateUtil {
    init(command) {
        const pwd = process.cwd();
        const result = `
(function(){
    console.log("-----IIFE")
})()
        `
        fs.writeFileSync(pwd+'/bundle.js', result)
        console.log(process.cwd(), __dirname)
    }
}

module.exports = CreateUtil