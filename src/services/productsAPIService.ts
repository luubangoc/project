import axios from "axios";
import request from "../utils/configAPI";

export const getProductsAPI = async () => {
  try {
    const response = await request.get("products");

    return response;
  } catch (error) {
    throw error;
  }
};
