import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import prof_pic from './assets/profile_pic.jpg'
import icon from './assets/Skull icon.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    // State to store messages
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState(''); // Track username
  // State to store visitor count
  const [visitorCount, setVisitorCount] = useState(0);
  // Function to handle adding a new message
  const addMessage = () => {
    if (inputMessage && username) {
      setMessages([...messages, { username, message: inputMessage }]);
      setInputMessage('');
    }
  };
  // Increment visitor count on every visit (refresh)
  useEffect(() => {
    // If localStorage has no record, initialize visitor count
    const savedCount = localStorage.getItem('visitorCount');
    const newCount = savedCount ? parseInt(savedCount) + 1 : 1;
    setVisitorCount(newCount);
    

    // Store the new visitor count in localStorage
    localStorage.setItem('visitorCount', newCount);
  }, []); // Empty dependency array ensures this runs only once on component mount


  return (
    <>
      <div>
        <h1>Security Course Ｗeb</h1>
        <h2>Student Number: R13921A22 </h2>
        <img src={icon} alt = "prof_pic" width="100" height="100"/>
        <p>My name is Yun-Jing Wang. I am a graduate student and currently studying in Electrical Engineering.</p>
      </div>
      <h2>Feel free to leave a message</h2>
      
      <div className="App">

        {/* Username input */}
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Message input */}
        <div>
          <input 
            type="text" 
            value={inputMessage} 
            onChange={(e) => setInputMessage(e.target.value)} 
            placeholder="Type your message here..."
          />
          <button onClick={addMessage}>Add Message</button>
        </div>

        <h2>Messages:</h2>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <p><strong>{msg.username}</strong>: {msg.message}</p>
            </div>
          ))}
        </div>

        <h3>Visitor Count: {visitorCount}</h3>
      </div>
      
    </>
  )
}

export default App
