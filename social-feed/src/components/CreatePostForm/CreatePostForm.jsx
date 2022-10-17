import React, { useState } from 'react';

const CreatePostForm = (props) => {
    // Two react functions are created to keep track of the name and the post strings of this form
    const [name, setName] = useState('');       // Name field
    const [post, setPost] = useState('');       // Post field
    const [time, setTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // This anonymous function sets a variable to the current date and time and returns it to the variable
        setTime(() => {
            let theDateAndTime = new Date().toLocaleString();
            console.log(theDateAndTime);
            return theDateAndTime;
        });

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
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            
            <button type='submit'>Create</button>
        </form>
        
        
        
     );
}
 
export default CreatePostForm;

