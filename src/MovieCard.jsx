import { motion } from "framer-motion";
const MovieCard = ({ movie }) => {
  return (
    <motion.div
      className="movie-card"
      whileHover={{
        scale: 1.05, // Slightly enlarge the card on hover
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // Add shadow effect
        transition: { duration: 0.3 }, // Smooth transition
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt="Movie poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <span className="movie-year">{movie.Year}</span>
      </div>
    </motion.div>
  );
};

export default MovieCard;
