import React, { useState } from 'react';

function BulbToggle() {
  const [isToggled, setIsToggled] = useState(false); // Initial state is off

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <img
        src={isToggled ? 'https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg' : 'https://c7.uihere.com/files/825/807/809/bulb-electricity-energy-glass.jpg'} // Path to your bulb images
        alt="Light bulb"
      />
      <button onClick={handleToggle}>
        {isToggled ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default BulbToggle;
