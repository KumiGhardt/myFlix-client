import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';




export function LoginView(props) {
    //call the useState() method (imported from React) with an empty string This method returns an array that you destructure (break down into variables)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        /* Send a request to the server for authentication */
        axios.post('https://kumi-movie-index.herokuapp.com/login', {
            Username: username,
            Password: password
        })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data);
            })
            .catch(e => {
                console.log('no such user')
            });
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