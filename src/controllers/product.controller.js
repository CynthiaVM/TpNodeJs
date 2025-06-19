// controller
import ProductService from '../services/user.service.js'
const getProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' })
  }
};

export default { getProducts };
