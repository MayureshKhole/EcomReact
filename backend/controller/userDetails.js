const userModel = require("../models/userModel");

async function userDetailsController(req,res){
    try {
        console.log("UserId",req.userId)

        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    } catch (error) {
        res.send(400).json({ 
            message:error.message||error,
            error:true,
            success:false,
        })
    }
}

module.exports = userDetailsController;