
const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.parentEntries.map((post) => {
                return (
                    <a>
                        <div>
                            <h5>{post.name}</h5>
                            <small>{post.time}</small>
                        </div>  

                        <p>{post.post}</p></a> 
                        // Add two images of thumbs up and down!
                    
                );
            })}
        </div>
        
     ); 
}
 
export default DisplayPosts;