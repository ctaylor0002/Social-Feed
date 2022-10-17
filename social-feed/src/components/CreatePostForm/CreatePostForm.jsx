import React, { useState } from 'react';

const CreatePostForm = (props) => {
    // Two react functions are created to keep track of the name and the post strings of this form
    const [name, setName] = useState('');       // Name field
    const [post, setPost] = useState('');       // Post field

    return ( 
        <form>
            <div>
                <label>Name</label>
                <input type='text' />
            </div>

            <div>
                <label>Post</label>
                <input type='text' />
            </div>
            
            <button type='submit'>Create</button>
        </form>
        
        
        
     );
}
 
export default CreatePostForm;

