import React, { useState } from 'react';

function Character({ name, planet }) {
  const [isPlanetShown, setIsPlanetShown] = useState(false);

  const togglePlanetDisplay = () => {
    setIsPlanetShown(!isPlanetShown);
  };

  return (
    <div className='character-card' onClick={togglePlanetDisplay} style={{ cursor: 'pointer' }}>
      <h3 className='character-name'>
        {name}
      </h3>
      {isPlanetShown && (
        <p>
          Planet: <span className="character-planet">{planet}</span>
        </p>
      )}
    </div>
  );
}

export default Character;