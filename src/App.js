import logo from './logo.svg';
import './App.css';
import AddSub from './components/AddSub';
import DeleteSub from './components/DeleteSub';
import SearchSub from './components/SearchSub';
import ViewSub from './components/ViewSub';

function App() {
  return (
    <div>
      <AddSub/>
      <DeleteSub/>
      <SearchSub/>
      <ViewSub/>
    </div>
  );
}

export default App;
