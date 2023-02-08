
import './App.css';
import Axios from 'axios'
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useState, useEffect } from 'react';



function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [mealType, setMealType] = useState("")
  

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&mealtype=${mealType}`
  // function sample(){
  //   console.log("hellooo")
  // }
useEffect(() => {
  getReceipeInfo();
}, [])


  const getReceipeInfo = async() =>{
  
    var result = await Axios.get(url);
    setApiData(result.data.hits)
  }

  return (
    <div className='container' >
      
      <form className='form-container '>
        <h1 className='heading'>Food Receipe</h1>
        <input type="text" placeholder='Search Here...!' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/>
       
        <select className='select-box' onChange={(e) => {setMealType(e.target.value)}}>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snacks</option>
        </select>
        <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
      </form>
     
      <div className='card-container' >
      {apiData.map(val => {
        return <Card image ={val.recipe.image} label={val.recipe.label} /> }
      )}

      


      </div>
    </div>
  );
}

export default App;
