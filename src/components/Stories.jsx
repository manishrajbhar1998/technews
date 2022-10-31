import React from 'react';
import { useGlobalContext } from '../context/Context';

const Stories = () => {
    const {hits,isLoading,removePost} = useGlobalContext();
    if(isLoading){
        return(
            <>
                <h1>Loading....</h1>
            </>
        )
    }
  return (
    <div className='stories-div'>
        {hits.map(({title,author,objectID,url,num_comments},index)=>(
            <div className="card" key={index}>
                <h2>{title}</h2>
                <p>By <span>{author}</span> | <span>{num_comments}</span> comments</p>
                <div className="card-button">
                    <a href={url} target="_blank">Read more</a>
                    <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Stories