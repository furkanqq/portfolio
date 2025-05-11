import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './views/home';
import Adore from './views/adore';
import Brother from './views/brother';
import Robin from './views/robin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adore" element={<Adore />} />
        <Route path="/brother" element={<Brother />} />
        <Route path="/robin" element={<Robin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
