const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming you have the User model set up

// User login
exports.login = async (req, res) => {  
        
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }

        // Verify password
        const isPasswordValid = password == user.password
        if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token expires in 1 hour
        );

        res.status(200).json({ message: 'Login successful', token, role: user.role });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during login', details: error.message });
    }
};

// Logout route 
exports.logout = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};

// MODIFY THE FRONTEND TO DISCARD THE TOKEN