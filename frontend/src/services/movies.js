import axios from "axios";

class MovieDataService {
    // Method to fetch all movies
    getAll(page = 0) {
        return axios.get(`http://localhost:5000/api/v1/movies?page=${page}`);
    }

    // Method to fetch a specific movie by ID
    get(id) {
        return axios.get(`http://localhost:5000/api/v1/movies/id/${id}`);
    }

    // Method to search for movies based on a query and optional search criteria
    find(query, by = "title", page = 0) {
        return axios.get(
            `http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`
        );
    }

    // Method to create a new movie review
    createReview(data) {
        return axios.post("http://localhost:5000/api/v1/movies/review", data);
    }

    // Method to update an existing movie review
    updateReview(data) {
        return axios.put("http://localhost:5000/api/v1/movies/review", data);
    }

    // Method to delete a movie review by review ID and user ID
    deleteReview(id, userId) {
        return axios.delete(
            "http://localhost:5000/api/v1/movies/review",
            { data: { review_id: id, user_id: userId } }
        );
    }

    // Method to fetch movie ratings
    getRatings() {
        return axios.get("http://localhost:5000/api/v1/movies/ratings");
    }
}

export default new MovieDataService();
