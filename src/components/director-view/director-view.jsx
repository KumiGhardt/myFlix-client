import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { MovieCard } from '../movie-card/movie-card';

export class DirectorView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { director, movies } = this.props
        if (!director) return null;

        return (

            <div className='director-view'>
            <Container>
                <Card className='director-card'>
                    <Card.Body>
                    <Card.Img variant="top" src={movie.ImagePath} />
                        <Card.Title>{director.Director.Name}</Card.Title>
                        <Card.Text >{this.formatDate(director.Director.Birth)}</Card.Text>
                        <Card.Text className='director-bio'>{director.Director.Bio}</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='director-movies'>
                    <Card.Body>
                        <Card.Title>Movies by {director.Director.Name}:</Card.Title>
                        <ListGroup className='director-MovieCard'>
                            <div className='director-movies'>
                                {movies.map((movie) => {
                                    if(movie.Director.Name === director.Director.Name) {
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

DirectorView.propTypes = {
    movie: PropTypes.shape({
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.instanceOf(Date).isRequired
        }),
    })
};