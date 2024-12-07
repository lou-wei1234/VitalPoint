const User = require('../models/User'); // Access db config

// Controller to fetch all users
getAllUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.find(); // This retrieves all users from the User collection
  
      // Return the list of users
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users', details: error.message });
    }
  };

module.exports = { getAllUsers };

