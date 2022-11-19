//TO BE DELETED
export function checkIfLoginSession( req, res, next){
    if(!req.session.loggedIn){
        res.send({message: "You are not allowed in here"})
    }  
}
