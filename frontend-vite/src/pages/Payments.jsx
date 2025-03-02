import React from "react";
import { deletePayment } from "../services/api"; 


const handleDeletePayment = async (paymentId) => {
  try {
    await deletePayment(paymentId);
    alert("Payment berhasil dihapus!");
  } catch (error) {
    console.error("Gagal menghapus payment:", error);
  }
};

const Payments = () => {
  return (
    <div>
      <h1>Payments Page</h1>
    </div>
  );
};

export default Payments;
