import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 404) message = "What was that?";
      else message = error.response.message;

      console.log(message);

      toast.error("What was that, something bad happen!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
