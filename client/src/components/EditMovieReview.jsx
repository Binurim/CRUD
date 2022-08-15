import '../App.css';
import React, { useState } from 'react';
import * as movieReviewService from '../services/movieReviewService';

const EditMovieReview = (props) => {
  const [newReview, setNewreview] = useState('');

  const getMovieReviewsList = () => {
    movieReviewService.getMovieReviews();
  };

  const deleteMovieReview = (movieId) => {
    movieReviewService.deleteMovieReview(movieId).then((res) => {
      getMovieReviewsList();
    });
  };

  const updateMovieReview = (movieId) => {
    movieReviewService.updateMovieReview(movieId, newReview).then((res) => {
      getMovieReviewsList();
    });
    setNewreview('');
  };

  return (
    <div className='card'>
      <form>
        <h2>MovieName: {props.movie.movieName}</h2>
        <p>{props.movie.movieReview}</p>
        <button
          onClick={() => {
            deleteMovieReview(props.movie.id);
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
            updateMovieReview(props.movie.id);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditMovieReview;
