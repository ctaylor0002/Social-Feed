/* User Stories Requirements
(5 points): As a developer, I want to make at least 7 good, consistent commits.
  - Completed

(5 points): As a developer, I want to use the Create-React-App to create my React project.
  - Completed

(5 points): As a developer, I want to display all posts (name, body, & liked status) within a feed on the main page.
  - Completed

(10 points): As a developer, I want to create “like” and “dislike” buttons so that I can visually show & toggle between “liking” and “disliking” a post.
  - Completed

(10 points): As a developer, I want to create a form on a separate component so that I can add a new post to the main feed.
  - Completed

(5 points): As a developer, I want to create a minimum of three React components and use them within my application (EX: CreatePost, DisplayPosts, Post, NavBar)
  - Completed

(5 points): As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience

BONUS:

(5 points): As a developer, I want to add a date to all posts and post creations.
  - Completed
*/

import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{name: 'Chucky Tster', post: 'Hey! I see this is your first time on PinIT, so take your time and read around. Feel free to type your name and what ever is on your mind to pin it for the world to see!', time: '10/16/2022 9:24 PM'}])

  function addNewPost(post) {

    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPost={addNewPost}/>
      <DisplayPosts parentEntries={posts} />
    </div>
  );
}

export default App;
