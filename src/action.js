import { fetch_data, fetch_err, fetch_req } from "./rowtype";

export const fetchmoviesRequest = () => {
    return {
      type: fetch_req,
    };
  };
      
  export const fetchmoviesSuccess = (genre, movies) => {
    return {
      type: fetch_data,
      payload: { genre, movies },
    };
  };
  
  
export  const fetchmoviesFailure = (error) => {
    return {
      type: fetch_err,
      payload: error,
    };
  };