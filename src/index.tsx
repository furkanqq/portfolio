import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './views/home';
import Adore from './views/adore';
import Brother from './views/brother';
import Robin from './views/robin';
import Daddy from './views/daddy';

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
        <Route path="/daddy" element={<Daddy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
