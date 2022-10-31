import React from 'react'
import { useGlobalContext } from '../context/Context'

const Pagination = () => {

    const {getPrevPage,getNextPage,page,nbPages} = useGlobalContext();
    
  return (
    <div className='pagination-div'>
        <button onClick={()=> getPrevPage()}>PREV</button>
        <p>{page+1} of {nbPages}</p>
        <button onClick={()=> getNextPage()}>NEXT</button>
    </div>
  )
}

export default Pagination