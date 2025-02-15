import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App.tsx';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')!,
);
