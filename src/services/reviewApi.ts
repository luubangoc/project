import axios from "axios";
import request from "../utils/configAPI";
import { IReview } from "../Types/models";

const reviewApi = {
  getAllReviews: async () => {
    try {
      const url = "reviews";
      const res = await request.get(url);
      return res;
    } catch (error) {
      throw error;
    }
  },
  postReview: async (data: IReview) => {
    try {
      const url = "reviews";
      await request.post(url, data);
      const res = await request.get(url);
      console.log(res);

      return res;
    } catch (error) {
      throw error;
    }
  },
};

export default reviewApi;
