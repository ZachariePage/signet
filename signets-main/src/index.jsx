import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Appli from './composants/Appli';

const root = ReactDOM.createRoot(document.getElementById('racine'));
root.render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>
);
