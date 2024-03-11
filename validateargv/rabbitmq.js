module.exports = (argv) => {

    const returnInput = {}

    for(let index=4; index<argv.length; index+=2){
        switch (argv[index]) {
            case '-u':
                returnInput.userName = argv[index+1];
                break;
            case '-username':
                returnInput.userName = argv[index+1];
                break;
            case '--pswd':
                returnInput.password = argv[index+1];
                break;
            case '--password':
                returnInput.password = argv[index+1];
                break;
            case '-i':
                returnInput.ip = argv[index+1];
                break;
            case '--ip':
                returnInput.ip = argv[index+1];
                break;
            case '-P':
                returnInput.port = argv[index+1];
                break;
            case '--port':
                returnInput.port = argv[index+1];
                break;
            default:
                return false;
        }
    }
    return returnInput
}