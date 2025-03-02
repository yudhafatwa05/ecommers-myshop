import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  // 🔹 Tambah Produk
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, price: Number(price), stock: Number(stock) };
      await createProduct(newProduct);
      fetchProducts();
      setName("");
      setPrice("");
      setStock("");
    } catch (error) {
      alert("Gagal menambah produk!");
    }
  };

  // 🔹 Edit Produk
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
  };

  // 🔹 Update Produk
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = { name, price: Number(price), stock: Number(stock) };
      await updateProduct(editingProduct.id, updatedProduct);
      fetchProducts();
      setEditingProduct(null);
      setName("");
      setPrice("");
      setStock("");
    } catch (error) {
      alert("Gagal mengupdate produk!");
    }
  };

  // 🔹 Hapus Produk
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (error) {
        alert("Gagal menghapus produk!");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Product List</h1>

      {/* 🔹 Form Tambah / Edit Produk */}
      <form
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        className="mb-6 p-4 border-2 border-blue-500 rounded-lg"
      >
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama Produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="Harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="border p-2 rounded-lg"
          />
        </div>
        <div className="mt-4 flex space-x-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {editingProduct ? "Update" : "Tambah"} Produk
          </button>
          {editingProduct && (
            <button
              onClick={() => setEditingProduct(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* 🔹 List Produk */}
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">Nama Produk</th>
            <th className="border p-3">Harga</th>
            <th className="border p-3">Stock</th>
            <th className="border p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100 transition">
              <td className="border p-3 text-center">{product.id}</td>
              <td className="border p-3">{product.name}</td>
              <td className="border p-3">Rp {product.price.toLocaleString()}</td>
              <td className="border p-3">{product.stock}</td>
              <td className="border p-3 flex space-x-2 justify-center">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
