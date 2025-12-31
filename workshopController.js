const Workshop = require('../Model/Workshop');

// Get All Workshops
const getAllWorkshops = async (req, res, next) => {

  let Workshops;

  try {
    Workshops = await Workshop.find();
  } catch (err) {
      console.log(err);
  }

//not found
if (!Workshops) {
  return res.status(404).json({ message: 'Workshops not found' });
}

//Display alll Workshops
return res.status(200).json({ Workshops });
};

//data insert
const addWorkshops = async (req, res) => {
  const {title, description, sessions, instructor, gmail, price, image} = req.body;
  
      let Workshops;
  
      try {
          Workshops = new Workshop({title, description, sessions, instructor, gmail, price, image});
          await Workshops.save();
      }catch (err) {
          console.log(err);
      }
      //not insert workshops
      if (!Workshops) {
          return res.status(404).json({ message: "unable to add users"});
      }
      return res.status(200).json({ Workshops });
    };

    //Get by Id
    const getById = async (req, res, next) => {
    
        const id = req.params.id;
    
        let Workshops;
    
        try {
            Workshops = await Workshop.findById(id);
        } catch (err) {
            console.log(err);
        }
        //not available users
        if (!Workshops) {
            return res.status(404).json({ message: "User not found"});
        }
        return res.status(200).json({ Workshops });
    
    };


    //Update workshop details
    const updateWorkshop = async (req, res, next) => {
        const id = req.params.id;
        const {title, description, sessions, instructor, gmail, price, image} = req.body;
    
        let Workshops;
    
        try {
            Workshops = await Workshop.findByIdAndUpdate(id, 
                { title: title, description: description, sessions: sessions, instructor: instructor, gmail: gmail, price: price, image: image});
                users = await users.save();
        } catch (err) {
            console.log(err);
        }
        //not update workshop details
        if (!Workshops) {
            return res.status(404).json({ message: "Unable to Update User Details"});
        }
        return res.status(200).json({ Workshops });
    };


    //Delete workshop details
    const deleteWorkshop = async (req, res, next) => {
        const id = req.params.id;
    
        let Workshops;
        try {
            Workshops = await Workshop.findByIdAndDelete(id)
        } catch (err) {
            console.log(err);
        }
        //not delete user
        if (!Workshops) {
            return res.status(404).json({ message: "Unable to Delete User Details"});
        }
        return res.status(200).json({ Workshops });
    }

exports.getAllWorkshops = getAllWorkshops;
exports.addWorkshops = addWorkshops;
exports.getById = getById;
exports.updateWorkshop = updateWorkshop;
exports.deleteWorkshop = deleteWorkshop;


