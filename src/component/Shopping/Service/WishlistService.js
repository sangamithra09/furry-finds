import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:8080/api/wishlist';

// Function to get the wishlist for a specific user
export const getWishlist = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wishlist', error);
        throw error;
    }
};

// Function to add a product to the wishlist
export const addProductToWishlist = async (userId, productId) => {
    try {
        const response = await axios.post(`${API_URL}/add`, null, {
            params: { userId, productId },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product to wishlist', error);
        throw error;
    }
};

// Function to remove a product from the wishlist
export const removeProductFromWishlist = async (userId, productId) => {
    try {
        await axios.delete(`${API_URL}/remove`, {
            params: { userId, productId },
        });
    } catch (error) {
        console.error('Error removing product from wishlist', error);
        throw error;
    }
};
