const getPort = () => {
    let len = process.argv.length;
    let PORT = 6379;
    for(let i = 0; i<len; i++) {
        if(process.argv[i] === '--port') {
            if(i+1 < len) {
                let p = parseInt(process.argv[i+1]);
                if(!isNaN(p)){
                    PORT = p;
                }
            }
        }
    }
    return PORT;
}

module.exports = getPort;