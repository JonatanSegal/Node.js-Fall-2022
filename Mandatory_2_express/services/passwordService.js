import bcrypt from "bcrypt"

const saltrounds = 12

export async function hashPassword(password){
    return await bcrypt.hash(password,saltrounds)
}

export async function comparePassword(loginPassword, encryptedpassword){
    return await bcrypt.compare(loginPassword, encryptedpassword)
}