import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { genre, movies } = this.props
        if (!genre) return null;

        return (

            <div className='genre-view'>
            <Container>
                <Card className='genre-card'>
                    <Card.Body>
                    <Card.Img variant="top" src={movie.ImagePath} />
                        <Card.Title>{genre.Genre.Name}</Card.Title>
                        <Card.Text className='genre-description'>{genre.Genre.Description}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='genre-movies'>
                    <Card.Body>
                        <Card.Title>Movies by {genre.Genre.Name}:</Card.Title>
                        <ListGroup className='Genre-MovieCard'>
                            <div className='Genre-Movies'>
                                {movies.map((movie) => {
                                    if(movie.Genre.Name === genre.Genre.Name.Name) {
                                        return (<MovieCard key={movie._id} movie={movie}/>)
                                    }
                                })}
                            </div>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card.Footer>
                    <Link to={`/`}>
                        <Button className='returnButton' variant='dark'>Return to Movie List</Button>
                    </Link>
                </Card.Footer>
            </Container>
        </div>
        );
    }
       
}

GenreView.propTypes = {
    movie: PropTypes.shape({
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        })
    })
};