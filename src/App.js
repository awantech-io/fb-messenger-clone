import React, { useState } from 'react';
import './App.css';

function App() {

  // declare form input state (using react hooks)
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);

  console.log(input);
  console.log(messages);

  // function send message inpu
  const sendMessage = (event) => {
    // add the input in message array 
    setMessage([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
      
      {/* messages  */}
      {
        messages.map(message => (
        <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
