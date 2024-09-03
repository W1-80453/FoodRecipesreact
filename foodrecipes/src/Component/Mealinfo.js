import React, { useState, useEffect } from 'react'; // Add useEffect
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null); // Initialize info with null

  // Fetch meal info when the component mounts or when mealid changes
  useEffect(() => {
    const getInfo = async () => {
      try {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
