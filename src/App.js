import logo from './logo.svg';
import './App.css';
import AddSub from './components/AddSub';
import DeleteSub from './components/DeleteSub';
import SearchSub from './components/SearchSub';
import ViewSub from './components/ViewSub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddSub/>}/>
          <Route path="/search" element={<SearchSub/>}/>
          <Route path="/delete" element={<DeleteSub/>}/>
          <Route path="/view" element={<ViewSub/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
