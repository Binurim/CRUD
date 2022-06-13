import '../App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

const MovieReview = () => {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewreview] = useState('');

  useEffect(() => {
    getMovieReviews();
  }, []);

  const getMovieReviews = () => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });
    setMovieReviewList([...movieReviewList, {
      movieName: movieName,
      movieReview: review,
    }]);
    document.getElementById('inputMovie').value = '';
    document.getElementById('inputReview').value = '';
  };

  const deleteMovieReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`).then((res) => {
      getMovieReviews();
    });
  };

  const updateMovieReview = (movieName) => {
    Axios.put("http://localhost:3001/api/update", {
      movieName: movieName,
      movieReview: newReview,
    }).then((res) => {
      getMovieReviews();
    });
    setNewreview('');
  };

  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          id="inputMovie"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <label>Review:</label>
        <input
          type="text"
          name="review"
          id="inputReview"
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={submitReview}>Submit</button>
        {movieReviewList.map((value) => {
          return (
            <div className="card">
              <form>
                <h1> MovieName: {value.movieName}</h1>
                <p>{value.movieReview}</p>
                <button
                  onClick={() => {
                    deleteMovieReview(value.movieName);
                  }}
                >
                  Delete
                </button>
                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => setNewreview(e.target.value)}
                />
                <button
                  onClick={() => {
                    updateMovieReview(value.movieName);
                  }}
                >
                  Update
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieReview;
