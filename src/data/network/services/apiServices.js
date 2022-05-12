
export const PostRequestService = (url = '', headers = {}, body = {}, contentType = 'application/json') => {
    const AuthToken = "";
    return new Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": contentType,
            Authorization: "Bearer " + AuthToken,
            ...headers,
          },
          body: JSON.stringify({
            ...body,
          }),
        })
          .then((response) => response.json())
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    
  };
  
  export const PostRequestWithoutAuthTokenService = (url = '', headers = {}, body = {}, contentType = "application/json") => {
      return Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": contentType,
            ...headers,
          },
          body: JSON.stringify({
            ...body,
          }),
        })
          .then((response) => response.json())
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    };

    