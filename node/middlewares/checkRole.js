const checkRole = (allowedRoles) => {
return (req,res,next)=>{
    console.log('roles' ,allowedRoles)
    console.log('userdata' ,req.user)

    if(!allowedRoles.includes(req.user.role)){
    return res.status(403).json({
        message : `${req.user.role} is not allow to access this resource`
    })
    }
    next()
   
}
}
module.exports = checkRole