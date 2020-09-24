import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

  // declare form input state (using react hooks)
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
    {username:'chacha', text:'hey guy'},
    {username:'yaya', text:'whats up'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run code here...
    // if its blank inside [], this code runs ONCE when the app component loads.
    setUsername(prompt('Please enter your name'));
    
  }, [] ) // codition

  // function send message input
  const sendMessage = (event) => {
    // add the input in message array 
    //setMessage([...messages, input]);
    setMessage([...messages, { username: username, text: input}]);
    setInput('');
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Hello {username}</h2>

      <form>
      <FormControl>
      <InputLabel >Enter a message...</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>    
      </form>

      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;
