import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  // declare form input state (using react hooks)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // {username:'Mat', message:'hey guy'},
    // {username:'Jon', message:'whats up'}
  ]);
  const [username, setUsername] = useState('');

  // fetch data from db
  useEffect(() => {
    // run once when the app component loads
    // get data from firebase db
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      // loop the data and set to doc and return it as object
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
    })
  }, [] )


  useEffect(() => {
    // run code here...
    // if its blank inside [], this code runs ONCE when the app component loads.
    setUsername(prompt('Please enter your name'));  
  }, [] ) // codition

  // Send data to db
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // add the input in message array 
    //setMessage([...messages, input]);
    // setMessages([...messages, { username: username, text: input}]);

    setInput('');
  }
  
  //console.log(messages);

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>

      <form>
      <FormControl>
      <InputLabel >Enter a message...</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>    
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
           <Message key={id} username={username} message={message} />
          //<Message username={message.username} text={message.text} />
        ))
      }
      </FlipMove> 
    </div>
  );
}

export default App;
