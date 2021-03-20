import React from 'react';

//the MovieCard component (child component) is responsible for listening for click events on the SingleMovie view and transmitting this as props to MainView (parent component)

export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props;
    return (
      <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

