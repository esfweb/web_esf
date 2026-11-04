import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThankYouPage } from './ThankYouPage';
import '../../index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThankYouPage />
    </StrictMode>
  );
}
