import satData from './components.satData';


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
    {orbitTypes.map((type, index) => {
      return(
        <div key={index}>
      <button onClick = {() => filterByType(type)} key={index}>
        {type} Orbit
        </button>
        </div>
        );
    })}
      <button onClick = {() => setSat(satData)}>
        All Orbits
        </button>
    </div>
  );
   };
export default Buttons;