const { log } = require("console");
const UserModel = require("../models/user.model");

exports.authFunc = async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const response = await UserModel.findOne({
            email: email,
            password: password,
        });
        console.log(response);
        if(response){
            res.status(200).send({data: response});
        }else{
            const userData = {
                email: email,
                password: password,
                name: "Anonymous",
                user_id: "1",
            }
            const addedModel = new UserModel(userData); // serialize
            const registeredUser = await addedModel.save();
            res.status(401).send({data: "UnAuthenticated", addedModel: registeredUser});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({"error": error});
    }
}
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await UserModel.findOne({_id: id});
        if(response){
            res.status(200).send({data: response});
        }else{
            res.status(404).send({data: "No User Found"});
        }
    } catch (error) {
        res.status(500).send({"error": error});
    }
}