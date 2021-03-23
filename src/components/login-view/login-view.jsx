import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export function LoginView(props) {
    //call the useState() method (imported from React) with an empty string This method returns an array that you destructure (break down into variables)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Sends a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
          </Button>
        </Form>
    );
}
LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        pasword: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired,
    onRegister: PropTypes.func
};