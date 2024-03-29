import axios from "axios";

export const getMovieReviews = () => {
  return axios.get("http://localhost:3001/api/get");
};

export const createMovieReview = (movieName, review) => {
  return axios.post("http://localhost:3001/api/insert", {
    movieName: movieName,
    movieReview: review,
  });
};

export const updateMovieReview = (movieId, newReview) => {
  return axios.put("http://localhost:3001/api/update", {
    movieId: movieId,
    movieReview: newReview,
  });
};
export const deleteMovieReview = (movieId) => {
  return axios.delete(`http://localhost:3001/api/delete/${movieId}`);
};
