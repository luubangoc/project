import request from "../utils/configAPI";

const pucharseApi = {
  getAllPucharses: async () => {
    try {
      const url = "orders";
      const res = await request.get(url);
      return res;
    } catch (error) {
      throw error;
    }
  },
};

export default pucharseApi;
