import './App.css';
import Personcard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Personcard 
        firstName = {'Doe'}
        lastName = {'Jane'}
        age = {45}
        hairColor =  {'Black'}
      />
      <Personcard 
        firstName = {'Smith'}
        lastName = {'John'}
        age = {88}
        hairColor =  {'Brown'}
      />
      <Personcard 
        firstName = {'Fillmore'}
        lastName = {'Millard'}
        age = {50}
        hairColor =  {'Brown'}
      />
      <Personcard 
        firstName = {'Smith'}
        lastName = {'Maria'}
        age = {62}
        hairColor =  {'red'}
      />
    </div>
  );
}

export default App;
