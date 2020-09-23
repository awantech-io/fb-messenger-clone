import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {

  // declare form input state (using react hooks)
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);

  console.log(input);
  console.log(messages);

  // function send message input
  const sendMessage = (event) => {
    // add the input in message array 
    setMessage([...messages, input]);
    setInput('');
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Messenger</h1>

      <form>
      <FormControl>
      <InputLabel >Enter a message...</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>    
      </form>

      {
        messages.map(message => (
        <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
