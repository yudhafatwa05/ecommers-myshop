import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Sesuaikan dengan backend

// 🔹 Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    // console.log(response)
    return response.data; // Pastikan API mengembalikan response yang benar
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error; // Lempar error agar bisa ditangani di `handleLogin`
  }
};
// 🔹 Get All Products with Token
export const getProducts = async () => {
  try {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage

    const response = await axios.get(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${token}`, // Kirim token di header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// 🔹 Create Product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Pastikan token dikirim
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error.response ? error.response.data : error.message);
    throw error; // Pastikan error dilempar agar bisa ditangkap di frontend
  }
};

// 🔹 Update Product
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${id}`, productData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// 🔹 Hapus Product
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.error("Error deleting product:", error.response ? error.response.data : error.message);
    throw error;
  }
};


// 🔹 Get All Orders
export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

// 🔹 Create New Order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// 🔹 Delete Order
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};

// 🔹 Get Payment Status
export const getPayments = async () => {
  try {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
};

// 🔹 Create Payment
export const createPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/payments`, paymentData);
    return response.data;
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
};
//  Delete Payment
export const deletePayment = async (paymentId) => {
  try {
    const response = await axios.delete(`${API_URL}/payments/${paymentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting payment:", error);
    throw error;
  }
};



// Jangan gunakan export default untuk menghindari kebingungan
export default { 
  loginUser, 
  getProducts,
  createProduct, 
  updateProduct, 
  getOrders, 
  createOrder, 
  deleteOrder, 
  getPayments, 
  createPayment, 
  deletePayment,
};
