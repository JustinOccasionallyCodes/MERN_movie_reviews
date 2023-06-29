//API: Application Programming Interface
import express from 'express';
import MoviesController from './movies.controller.js';
import ReviewsController from './reviews.controller.js';

const router = express.Router(); // get access to express router

// Route for getting all movies
router.route('/')
  .get(MoviesController.apiGetMovies);

// Route for getting a movie by ID
router.route("/id/:id")
  .get(MoviesController.apiGetMovieById);

// Route for getting movie ratings
router.route("/ratings")
  .get(MoviesController.apiGetRatings);

// Route for handling review operations
router.route("/review")
  .post(ReviewsController.apiPostReview) // Create a new review
  .put(ReviewsController.apiUpdateReview) // Update an existing review
  .delete(ReviewsController.apiDeleteReview); // Delete a review

//--router.route('/').get((req,res) => res.send('hello world'));
export default router;
