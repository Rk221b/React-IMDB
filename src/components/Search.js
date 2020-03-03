import React from 'react'

function Search(props) {
    return (
        <section className="searchbox-wrap">
            <input 
            type='text' 
            placeholder="Search for a movie..." 
            className="searchbox" 
            onChange = {props.handleInput}
            onKeyPress = {props.searchMovie}
            />
        </section>
    )
}

export default Search
