import fs from "fs"
import db from "../database/connection.js"
const DATABASE = "./util/fakeDB.json"


export function checkUserExists(email) {
    if (getAllUsers().find(user => user.email === email)) {
        return true
      } else {
        return false
      }
}

export function findUserByEmail(email) {
  if(checkUserExists(email)) {
    return getAllUsers().find(user => user.email === email)
  } else {
    console.log("No user found with that email")
  }
}

 export function saveUser(userinfo){
    fs.writeFileSync(DATABASE,JSON.stringify(userinfo))
}

export async function getAllUsers(){
    const DATA = await db.all("SELECT * FROM users")
    console.log(DATA)
    return DATA.data
}
