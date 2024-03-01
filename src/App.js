import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import CountryPage from './components/CountryPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='countryPage' element={<CountryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
