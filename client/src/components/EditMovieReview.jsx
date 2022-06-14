import '../App.css';
import React, { useState } from 'react';
import * as movieReviewService from '../services/movieReviewService';

const EditMovieReview = (props) => {
  const [newReview, setNewreview] = useState('');

  const getMovieReviewsList = () => {
    movieReviewService.getMovieReviews();
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
    <div className='card'>
      <form>
        <h2>MovieName: {props.movie.movieName}</h2>
        <p>{props.movie.movieReview}</p>
        <button
          onClick={() => {
            deleteMovieReview(props.movie.movieName);
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
            updateMovieReview(props.movie.movieName);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditMovieReview;
