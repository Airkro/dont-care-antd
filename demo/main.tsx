import { createRoot } from 'react-dom/client';
import { Page } from './tree/page.tsx';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
}
