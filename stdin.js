const readline = require('readline');


module.exports = (Question) => {

    return new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(Question, (answer) => {
            rl.close();
            return resolve(answer);
        });
    })
}

