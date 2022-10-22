import { users } from "./fakeDatabase.js"

export function checkUserExists(users, email) {
    if (users.find(user => user.email === email)) {
        return true
      } else {
        return false
      }
}

export function findUserByEmail(email) {
    if(checkUserExists(users, email)) {
      return users.find(user => user.email === email)
    } else {
      console.log("No user found with that email")
    }
}