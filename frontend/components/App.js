import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const urlPlanets = 'http://localhost:9009/api/planets';
    const urlPeople = 'http://localhost:9009/api/people';
    
    const fetchData = async () => {
      try {
        const [resPeople, resPlanets] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);


        const combinedData = resPeople.data.map(person => {
          const planet = resPlanets.data.find(p => p.id === person.homeworld);
          return { ...person, planetName: planet ? planet.name : 'Unknown' };
        });

console.log(combinedData )

        setCharacters(combinedData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => (
        <Character key={index} name={character.name} planet={character.planetName} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
