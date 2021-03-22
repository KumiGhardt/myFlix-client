import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';


//reusable movie-card components
import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    // Initial state is set to null

    this.state = {
      movies: null,
      selectedMovie: null,
      user: null,
      register: null
    };
  }

  componentDidMount() {
    axios
      .get("https://kumi-movie-index.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onRegistered(register) {
    this.setState({
        register,
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

 

  render() {
    //destructure
    const { movies, selectedMovie, user, register } = this.state;

    if (!register) return <RegistrationView onRegistered={(register) => this.onRegistered(register)}/>

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />

    // Before the movies have been loaded
    if (!movies) return <div className="main-view" />;

    return (
      <Container>
          {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
          {selectedMovie ? (
            <Row className="justify-content-md-center">
              <Col md={8}>
                <MovieView
                  movie={selectedMovie}
                  removeSelectedMovie={() => this.setState({ selectedMovie: null })}
                />
              </Col>
            </Row>
          ) : (
              //pass the properties(props) to the MovieCard component of an individual movie:
              <Row className="justify-content-md-center">
                {movies.map(movie => (
                  <Col key={movie._id}>
                    <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
                  </Col>))}
              </Row>
            )}
      </Container>
    );
  }
}
