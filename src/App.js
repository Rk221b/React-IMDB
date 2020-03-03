import React,{ useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import axios from 'axios';

function App() {

  const [state,setState] = useState({
    search: "",
    results: [],
    selected: {}
  });
  const base = "http://omdbapi.com/?apikey=71d0dce4";

  const searchMovie = (event) =>{

    if(event.key === 'Enter'){
      axios(base + "&s=" + state.search)
      .then( ( {data} ) =>{
        
        let results = data.Search;

        setState(prevState =>{
            return {...prevState, results:results}
        })
      })
      .catch(err =>{
        console.log(err)
      })
    }
  }

  const handleInput = (event) => {
    let search = event.target.value;

    setState(prevState =>{
      return { ...prevState, search:search}
    });
  }

  const openPopup = id =>{
    axios(base + "&i=" + id)
    .then (({data}) =>{
      let result = data;

      setState(prevState =>{
        return { ...prevState, selected:result}
      });
    })
  }

  const closePopup = ()=>{
    setState(prevState =>{
      return { ...prevState, selected:{}}
    });
  }

  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search 
        handleInput = {handleInput}
        searchMovie = {searchMovie}
        />

        <Results 
        results = {state.results}
        openPopup = {openPopup}
        />

        {
          (typeof state.selected.Title != "undefined") 
          ? 
          <Popup 
          selected={state.selected}
          closePopup={closePopup}
          />
          :
          null
        }
      </main>
    </div>
  );
}

export default App;
