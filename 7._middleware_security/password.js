import bcrypt from "bcrypt"

const saltRounds = 12
const plaintextPassword = "Hunter12"
const loginPassword = "Hunter12"
const encryptedpassword = "$2b$12$Yyjz82XQMb0.PYj3ipiRz.GP2Azls1NLZAO4.4lPwvqBdf1G4dBgO"

 const encryptedpasswordResult = await bcrypt.hash(plaintextPassword, saltRounds)
 //console.log(encryptedpasswordResult)

 const passwordComparison = await bcrypt.compare(loginPassword, encryptedpassword)
console.log(passwordComparison)
