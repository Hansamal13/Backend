const express = require("express");
const router = express.Router();

//Insert model
const User = require("../Model/UserModel");


// Add this to your Express.js backend routes file (e.g., userRoutes.js)

// POST route for user login
router.post('/login', async (req, res) => {
    try {
      const { Email_address, Password } = req.body;
      
      console.log("Login attempt with:", { Email_address, Password });
      
      // Find user by email
      const user = await User.findOne({ Email_address });
      
      if (!user) {
        console.log("User not found with email:", Email_address);
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid email or password' 
        });
      }
      
      // Compare passwords (direct comparison since you're storing as plain text)
      // NOTE: In a production app, you should use hashed passwords with bcrypt instead
      if (Password !== user.Password) {
        console.log("Password doesn't match");
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid email or password' 
        });
      }
      
      console.log("Login successful for user:", user.Email_address);
      
      // Create user object without sensitive information
      const userResponse = {
        _id: user._id,
        Fname: user.Fname,
        Lname: user.Lname,
        Email_address: user.Email_address,
        ContactNumber: user.ContactNumber,
        Address: user.Address
        // Don't include password
      };
      
      // Send successful response
      res.status(200).json({
        success: true,
        message: 'Login successful',
        user: userResponse
      });
      
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error' 
      });
    }
  });










//insert user controller
const UserControlers = require("../Controlers/UserControlers");

router.get("/",UserControlers.getAllUsers);
router.post("/",UserControlers.addUsers);
router.get("/:id",UserControlers.getById);  // id = controller name 
router.put("/:id",UserControlers.updateUser);
router.delete("/:id",UserControlers.deleteUser);

//export
module.exports = router;