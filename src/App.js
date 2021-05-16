import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

const [posts, setPosts]=useState([])
const getPosts = async () => {
  try {
const userPosts = await axios.get("https://jsonplaceholder.typicode.com/users")
    
    setPosts(userPosts.data);  // set State
  
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{
    
    getPosts()
    const interval=setInterval(()=>{
      getPosts()
    },10000)
    return()=>clearInterval(interval)
},[])

return (
  <div>
  <h1>user List</h1>

  <br></br>
  <br></br>
  <div className="first">
  <Card>
  <div className="flush">
  <Card.Body>
    <h4 style={{color:'red'}}>User Name</h4>
    {posts.map(post=>(
      
      <h6 key={post.id}>{post.username}</h6>
    
      ))}
  </Card.Body>
  </div>
  </Card>


  <Card>
  <div className="flush">
  <Card.Body>
  <h4 style={{color:'red'}}>User Phone</h4>
      {posts.map(post=>(
      <h6 key={post.id}>{post.phone}</h6>
      ))}
      
  </Card.Body>
  </div>
</Card>



  <br></br>
  <Card>
  <div>
  <Card.Body className="flush">
  <h4 style={{color:'red'}}>User Website</h4>
      {posts.map(post=>(
      <h6 key={post.id}>{post.website}</h6>
      ))}
      
  </Card.Body>
  </div>
</Card>

<br></br>
  <Card>
  <div>
  <Card.Body className="flush">
  <h4 style={{color:'red'}}>User Email</h4>
      {posts.map(post=>(
      <h6 key={post.id}>{post.email}</h6>
      ))}
      
  </Card.Body>
  </div>
</Card>

  <br></br>
  <br></br>
  </div>
  





  
  
  
  </div>
);
}

export default App;
