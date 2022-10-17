import React, { useState } from 'react';
import ThumbsUp from "../assets/Thumbs-Up.png"
import ThumbsUpSelected from "../assets/Thumbs-Up-Selected.png"
import ThumbsDown from "../assets/Thumbs-Down.png"
import ThumbsDownSelected from "../assets/Thumbs-Down-Selected.png"
import "./DisplayPosts.css"

const DisplayPosts = (props) => {
    
    // Utilized functions designed by Pankaj Maru in the comment section of https://stackoverflow.com/questions/51480885/change-image-on-click-react
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    function handleDislike(event) {
        event.preventDefault();
        //console.log(event);
        let image = event.target.src;
        
        if (image === ThumbsDown) {
            event.target.src = ThumbsDownSelected;

        } else {
            event.target.src = ThumbsDown;
        }
        
        // if (!dislike) {
        //     setDislike(true);
        //     setLike(false);         // Sets the Like Button to false (Doesn't allow a user to select like and dislike)
        // } else {
        //     setDislike(false);
        // }
        
    }

    function handleLike(event) {
        event.preventDefault();     // Sets the Like Button to false (Doesn't allow a user to select like and dislike)
        
        if (event.target.src === ThumbsUp) {
            event.target.src = ThumbsUpSelected;
        } else {
            event.target.src = ThumbsUp;
        }
        
        // if (!like) {
        //     setLike(true);
        //     setDislike(false); 
        // } else {
        //     setLike(false);
        // }
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
                                <img src={ThumbsUp} alt="Thumbs Up" className="jump-shake" onClick={handleLike} id={'Thumbs-Up' + index}/>
                                <img src={ThumbsDown} alt="Thumbs Down" className="jump-shake" onClick={handleDislike} id={'Thumbs-Down' + index}/>
                            </div>

                        </a>

                        
                    </div>
                    

                    
                 
                    
                );
            })}
        </div>
        
     ); 
}
 
export default DisplayPosts;