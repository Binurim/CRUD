import '../App.css';
import React, {useState, useEffect} from 'react';
import * as movieReviewService from '../services/movieReviewService';

const MovieReview = () => {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewreview] = useState('');

  useEffect(() => {
    getMovieReviewsList();
  }, []);

  const getMovieReviewsList = () =>  {
    movieReviewService.getMovieReviews().then((response)=> {
      setMovieReviewList(response.data)
    });
  }

  const submitReview = () => {
    movieReviewService.createMovieReview(movieName, review);
    setMovieReviewList([...movieReviewList, {
      movieName: movieName,
      movieReview: review,
    }]);
    document.getElementById('inputMovie').value = '';
    document.getElementById('inputReview').value = '';
  };

  const deleteMovieReview = (movie) => {
    movieReviewService.deleteMovieReview(movie).then((res) => {
      getMovieReviewsList();
    });
  };

  const updateMovieReview = (movieName) => {
    movieReviewService.updateMovieReview(movieName, newReview).then((res) => {
      getMovieReviewsList();
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
        {movieReviewList?.map((value) => {
          return (
            <div className="card">
              <form>
                <h2>MovieName: {value.movieName}</h2>
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
