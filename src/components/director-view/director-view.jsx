import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export class DirectorView extends React.Component {

  constructor() {
    super();
    this.state = {};
    
  }


  render() {
      
    const { director } = this.props;
    if (!director) return null;

    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{director.Director.Name}</span>
        </div>
        <div className="movie-description">
          <span className="label">Bio: </span>
          <span className="value">{director.Director.Bio}</span>
        </div>

        <div className="director-birth">
          <span className="label">Birthdate: </span>
          <span className="value">{director.Director.Birth}</span>
        </div>

        <div className="director-death">
          <span className="label">Death: </span>
          <span className="value">{director.Director.Death}</span>
        </div>

        <Link to={'/'}> <Button variant="dark">Back</Button> </Link>
      </div>
    );
  }
}



DirectorView.propTypes = {

  Movie: PropTypes.shape({
    Director: {
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string,
    Birth: PropTypes.number,
    Death: PropTypes.number, 
  }
})
};