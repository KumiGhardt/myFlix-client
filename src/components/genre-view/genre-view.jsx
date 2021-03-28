import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

export class GenreView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { genre, movies } = this.props;
    if (!genre) return null;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="label">Name: </span>
          <span className="value">{genre.Genre.Name}:</span>
        </div>
        <div className="genre-description">
          <span className="label">Description: </span>
          <span className="value">{genre.Genre.Description}</span>
        </div>
{/* 
        <Card className='genre-movies'>
            <Card.Body>
              <Card.Title className='genre-movies'>Other {genre.Genre.Name} Movies:</Card.Title>
                <div className='genre-view-movies'>
                  {movies.map((m) => {
                    if (movies.Genre.Name === genre.Genre.Name) {
                      return (<MovieCard key={movie._id} movie={movies} />)
                    }
                  })}
                </div>
            </Card.Body>
          </Card>
   */}      


        <Link to={'/'}> <Button variant="dark">Back</Button> </Link>
      </div>
    );
  }
}



GenreView.propTypes = {
  movie: PropTypes.shape({
    Genre: {
      Name: PropTypes.string,
      Description: PropTypes.string
    }
  })
};