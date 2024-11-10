import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cartitems';

export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

export const deleteCartItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    throw error;
  }
};

export const updateCartItemQuantity = async (id, quantity) => {
  try {
    await axios.put(`${API_URL}/${id}`, { quantity });
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw error;
  }
};

export const addCartItem = async (userId, productId, quantity) => {
  try {
    // Ensure userId, productId, and quantity are passed to the URL as query parameters
    const response = await axios.post(
      `${API_URL}/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
    );
    return response.data;
  } catch (error) {
    console.error('Error adding cart item:', error);
    throw error;
  }
};
