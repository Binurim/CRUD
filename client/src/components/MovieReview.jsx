import '../App.css';
import React, {useState, useEffect} from 'react';
import * as movieReviewService from '../services/movieReviewService';
import EditMovieReview from './EditMovieReview';

const MovieReview = () => {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);

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


  return (
    <div className='App container-fluid'>
      <h1>Movie Reviews</h1>
      <div className='row'>
        <div className='col-6 form'>
        <label>Movie Name:</label>
        <input
          type='text'
          name='movieName'
          id='inputMovie'
          onChange={(e) => setMovieName(e.target.value)}
        />
        <label>Review:</label>
        <input
          type='text'
          name='review'
          id='inputReview'
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={submitReview}>Submit</button>
        </div>
        <div className='col-6'>
        {movieReviewList?.map((value) => {
          return (
              <EditMovieReview movie={value} key={value.id}/>
          );
        })}
        </div>
      </div>
      <br/><br/>
    </div>
  );
}

export default MovieReview;
