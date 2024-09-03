import React, { useState } from 'react'; // Ensure useState is imported
import Mealcards from './Mealcards';

const Mainpage = () => {
  const [data, setData] = useState(); // State to store fetched meal data
  const [search, setSearch] = useState(''); // State to manage input value

  const handleInput = (event) => {
    setSearch(event.target.value); // Update search state on input change
  };

  const myFun = async () => {
    // Use backticks for template literals and ensure `search` state is used correctly
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    setData(jsonData.meals); // Update state with fetched data
  };

  return (
    <div className='container'>
      <div className='searchBar'>
        <input type='text' placeholder='Enter dish' onChange={handleInput} />
        <button onClick={myFun}>Search</button>
      </div>
      <div>
        <Mealcards detail={data} />
      </div>
    </div>
  );
};

export default Mainpage;
