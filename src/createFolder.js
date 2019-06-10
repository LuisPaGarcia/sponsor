const fs = require("fs"); 
const path = ".github"

function createFolder(){
    fs.mkdirSync(path)
}

export { createFolder }