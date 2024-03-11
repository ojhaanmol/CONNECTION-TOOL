module.exports = (argv) => {

    const returnInput = {}

    for(let index=4; index<argv.length; index+=2){
        switch (argv[index]) {
            case '-h':
                returnInput.host = argv[index+1];
                break;
            case '--host':
                returnInput.host = argv[index+1];
                break;
            case '-p':
                returnInput.password = argv[index+1];
                break;
            case '--password':
                returnInput.password = argv[index+1];
                break;
            case '-u':
                returnInput.user = argv[index+1];
                break;
            case '--user':
                returnInput.user = argv[index+1];
                break;
            case '-d':
                returnInput.database = argv[index+1];
                break;
            case '--database':
                returnInput.database = argv[index+1];
                break;
            default:
                return false;
        }
    }
    return returnInput
}