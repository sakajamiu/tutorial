
import './App.css';
import Details from './text';

 export const Hello = ({name, greeting}) => {
 
  return (
    <div>
      <p>{greeting} {name}</p>
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <Hello name="malik and Jamiu"/>
    <Details/>
    </div>
  );
}

export default App;
