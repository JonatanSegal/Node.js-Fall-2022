import fs from "fs"
const DATABASE = "./util/fakeDB.json"


export function checkUserExists(email) {
    if (getAllUsers().find(user => user.email === email)) {
        return true
      } else {
        return false
      }
}

 export function saveUser(userinfo){
    fs.writeFileSync(DATABASE,JSON.stringify(userinfo))
}

export function getAllUsers(){
    return JSON.parse(fs.readFileSync(DATABASE))
}
