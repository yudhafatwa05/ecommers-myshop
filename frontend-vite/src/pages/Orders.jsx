import React from "react";
import { deleteOrder } from "../services/api";

const handleDeleteOrder = async (orderId) => {
  try {
    await deleteOrder(orderId);
    alert("Order berhasil dihapus!");
  } catch (error) {
    console.error("Gagal menghapus order:", error);
  }
};


const Orders = () => {
  return <div>Halaman Orders</div>;
};

export default Orders; // Pastikan ada export default
