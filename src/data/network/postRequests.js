import { ADMIN_URL } from "./Config";
import { PostRequestService } from "./services/apiServices";

export class PostRequests {
  authenticate = () => {
    return new Promise((resolve, reject) => {
      PostRequestService(ADMIN_URL)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
  };

  login = (a, b) => {
    return new Promise((resolve, reject) => {
      PostRequestService(ADMIN_URL)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    })
  }
}
