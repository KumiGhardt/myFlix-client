import React from 'react';

//the MovieCard component (child component) is responsible for listening for click events on the SingleMovie view and transmitting this as props to MainView (parent component)

export class MovieCard extends React.Component {

  
  render() {
    const { movie, onClick } = this.props;

    return (
      /*
<Card Style={{ width: '22rem' }} className='movie-card'>
  <Card.Img variant='top' src={movie.ImagePath} />
  <Card.Body>
    <Card.Title>{movie.Title + ' - ' + movie.Released}</Card.Title>
    <Card.Text>{movie.Description}</Card.Text>
    <button
    onClick={() => onClick(movie)}
    variant='link'
    className="expand-movie"
    >
      Details
    </button>
  </Card.Body>
</Card>
*/
    <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

