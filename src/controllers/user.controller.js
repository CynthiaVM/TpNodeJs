// controller
import userService from '../services/user.service.js'
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
  }
};

export default { getUsers };
