import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Link, BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import PzszachCalculator from './routes/PzszachCalculator';
import FideCalculator from './routes/FideCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className="container">
    
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/pzszach-rank-calc"}>Kalkulator pzszach</Link>
          </li>
          <li>
            <Link to={"/fide"}>Kalkulator fide</Link>
          </li> 
        </ul>
      </nav>
        <Routes>
          <Route path='/pzszach-rank-calc' element={<PzszachCalculator/>}/>
          <Route path="/fide" element={<FideCalculator/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
