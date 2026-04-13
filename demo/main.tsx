import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Page as TreePage } from './tree/page.tsx';
import { Page as SeparatePage } from './separate/page.tsx';
import { Page as HomePage } from './home/page.tsx';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';
// import { ThemeWrapper } from './tree/theme-wrapper.tsx';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      {/* <ThemeWrapper> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tree" element={<TreePage />} />
          <Route path="/separate" element={<SeparatePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeWrapper> */}
    </StrictMode>,
  );
}
