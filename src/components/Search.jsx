import React from 'react'
import { useGlobalContext } from '../context/Context'

const Search = () => {

    const {query,searchPost} = useGlobalContext();
  return (
    <div className='search-div'>
        <h1>Tech News</h1>
        <form>
            <div>
                <input type="text" placeholder='Search here' value={query} onChange={(e)=> searchPost(e.target.value)} />
            </div>
        </form>
    </div>
  )
}

export default Search