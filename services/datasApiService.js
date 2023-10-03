import { datasApi } from "./datasApi";

export default {
  getDatas(request) {
    return datasApi("/datas/json/" + request + ".json");
  },
};
