const User = require("../Model/UserModel");
const getAllUsers = async (req,res,next) => {

    let users;
    //get all users
    try {
        users = await User.find();

    } catch (error) {
        console.log(err);     
    }
    // not found

    if(!users){
        return res.status(404).json({message:"User Not Found"});
    }

    //display 

    return res.status(200).json({users});
};


//data insert
const addUsers = async(req, res, next) =>{

    const {Fname,Lname,Email_address,ContactNumber,Address,Password,ProfilePhotod} = req.body;

    let users;

    try{
        users = new User({Fname,Lname,Email_address,ContactNumber,Address,Password,ProfilePhotod});
        await users.save();
    }catch(err){
        console.log(err);
    }

    //not insert users

    if (!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users});

};

// get by ID
const getById = async (req, res, next) => {

    const id = req.params.id; // route

let user;

try{
    user = await User.findById(id); // id check
}catch(err){
    console.log(err);
}
 //not available user

 if (!user){
    return res.status(404).json({message:"user not found"});
}
return res.status(200).json({user});

};

//update user details

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {Fname,Lname,Email_address,ContactNumber,Address,Password,ProfilePhotod} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
            {Fname:Fname, Lname:Lname,Email_address:Email_address, ContactNumber:ContactNumber,Address:Address,Password:String,ProfilePhotod:ProfilePhotod});
            users = await users.save();
    }catch(err){
        console.log(err);
    }

    //not available user
    if (!users){
        return res.status(404).json({message:"Unable to Update User Details!"});
    }
    return res.status(200).json({users});
    
};

//delet user details

const deleteUser = async (req, res, next) => {//create function

    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

 //not available user
 if (!user){
    return res.status(404).json({message:"Unable to Delete User Details!"});
}
return res.status(200).json({user});   

};


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
