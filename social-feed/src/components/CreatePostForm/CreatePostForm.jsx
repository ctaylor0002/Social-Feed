import React, { useState, useEffect } from 'react';
import './CreatePostForm.css'

const CreatePostForm = (props) => {
    // Two react functions are created to keep track of the name and the post strings of this form
    const [name, setName] = useState('');       // Name field
    const [post, setPost] = useState('');       // Post field
    const [time, setTime] = useState('');

    useEffect(() => {
        let theDateAndTime = new Date().toLocaleString();
        console.log(theDateAndTime);
        setTime(theDateAndTime);
    });

    function handleSubmit(event) {
        event.preventDefault();

        // This anonymous function sets a variable to the current date and time and returns it to the variable
        
        
        console.log(time)

        let newPost = {
            name: name,
            post: post,
            time: time
        };
        
        console.log(newPost);

        setPost('')

        props.addNewPost(newPost);
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' class="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className='form-group'>
                <label>Post</label>
                <input type='text' class="form-control" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            
            <button type='submit' class="btn btn-primary">Create</button>
        </form>
        
        
        
     );
}
 
export default CreatePostForm;

