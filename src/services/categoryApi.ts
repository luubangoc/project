import axios from "axios";
import request from "../utils/configAPI";

const categoryApi = {
  getAllCategories: async () => {
    try {
      const url = "category";
      const res = await request.get(url);
      return res;
    } catch (error) {
      throw error;
    }
  },
};

export default categoryApi;
