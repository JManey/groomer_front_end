import axios from "axios";
import * as actions from "../api";
import { apiURL } from "../../config/apiURL";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallStarted.type) return next(action);

  const { url, method, data, onSuccess, onError, onStart } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL: apiURL,
      url,
      method,
      data,
    });
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
