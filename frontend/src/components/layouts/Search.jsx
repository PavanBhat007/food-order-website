import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <form>
        <div className="input-group">
            <input 
                type="text"
                name="search-field" 
                id="search_field" 
                className="form-control" 
                placeholder="Search your Favourite Restaurant ..."
            />
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                    <FaSearch className='fa fa-search'/>
                </button>
            </div>
        </div>
    </form>
  )
}
