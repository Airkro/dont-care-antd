import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';
import { ThemeWrapper } from './components/theme-wrapper.tsx';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </StrictMode>,
  );
}
