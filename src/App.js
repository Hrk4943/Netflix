
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import{originals,action,comedy,horror,romance ,documentries } from './url'

function App() {
  c
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals}  title='NetFlix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentries} title='Documentries' isSmall/>
      
    </div>
    
  );
}

export default App;
