import React, { useState } from 'react';
import ThumbsUp from "../assets/Thumbs-Up.png"
import ThumbsUpSelected from "../assets/Thumbs-Up-Selected.png"
import ThumbsDown from "../assets/Thumbs-Down.png"
import ThumbsDownSelected from "../assets/Thumbs-Down-Selected.png"
import "./DisplayPosts.css"

const DisplayPosts = (props) => {
    
    // Utilized functions designed by Pankaj Maru in the comment section of https://stackoverflow.com/questions/51480885/change-image-on-click-react
    const [like, setLike] = useState(false);
    const likeImages = {ThumbsUp, ThumbsUpSelected};
    const [dislike, setDislike] = useState(false);
    const dislikeImages = {ThumbsDown, ThumbsDownSelected};

    function handleDislike(event) {
        event.preventDefault();
        if (!dislike) {
            setDislike(true);
            setLike(false);         // Sets the Like Button to false (Doesn't allow a user to select like and dislike)
        } else {
            setDislike(false);
        }
    }

    function handleLike(event) {
        event.preventDefault();     // Sets the Like Button to false (Doesn't allow a user to select like and dislike)
        if (!like) {
            setLike(true);
            setDislike(false); 
        } else {
            setLike(false);
        }
    }

    return ( 
        <div>
            {props.parentEntries.map((post, index) => {
                return (
                    <div className='post'>
                        <a  className='list-group-item list-group-item-action flex-column align-items-start active'>
                            <div className='d-flex w-100 justify-content-between'>
                                <h5 className='mb-1'>{post.name}</h5>
                                <small>{post.time}</small>
                            </div>  

                            <p className='mb-1'>{post.post}</p>

                            <div className='buttons'>
                                <img src={!like ? ThumbsUp : ThumbsUpSelected } alt="Thumbs Up" className="jump-shake" onClick={handleLike} />
                                <img src={!dislike ? ThumbsDown : ThumbsDownSelected } alt="Thumbs Down" className="jump-shake" onClick={handleDislike} />
                            </div>

                        </a>

                        
                    </div>
                    

                    
                 
                    
                );
            })}
        </div>
        
     ); 
}
 
export default DisplayPosts;