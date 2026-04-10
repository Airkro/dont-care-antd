import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
