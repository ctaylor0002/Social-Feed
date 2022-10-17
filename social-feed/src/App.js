/* User Stories Requirements
(5 points): As a developer, I want to make at least 7 good, consistent commits.

(5 points): As a developer, I want to use the Create-React-App to create my React project.
  - Completed

(5 points): As a developer, I want to display all posts (name, body, & liked status) within a feed on the main page.

(10 points): As a developer, I want to create “like” and “dislike” buttons so that I can visually show & toggle between “liking” and “disliking” a post.

(10 points): As a developer, I want to create a form on a separate component so that I can add a new post to the main feed.

(5 points): As a developer, I want to create a minimum of three React components and use them within my application (EX: CreatePost, DisplayPosts, Post, NavBar)

(5 points): As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience

BONUS:

(5 points): As a developer, I want to add a date to all posts and post creations.
*/

import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
