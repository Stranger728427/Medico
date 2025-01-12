import axios from "axios";
import { useEffect, useState } from "react";

export const useProductsApi = () => {
  const BASE_URL = "https://fakestoreapi.com/products/";
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
