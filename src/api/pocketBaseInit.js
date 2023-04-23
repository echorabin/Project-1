import pocketBase from "pocketbase";
import { BASE_URL } from "../constants/apiUrls";

const pb = new pocketBase(BASE_URL);

pb.beforeSend = function (url, options) {
  options.headers = Object.assign({}, options.headers, {
    Authorization: "",
  });
};
