import React from 'react'
import Result from './Result';

function Results( {results, openPopup} ) {
    return (
        <section className='results'>
            {results.map(result => {
              return <Result 
              result = {result} 
              key = {result.imdbID}
              openPopup = {openPopup}
              />
            })}
        </section>
    )
}

export default Results
