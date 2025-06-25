import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/Router';
import AOSWrapper from './components/AOSWrapper';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AOSWrapper>
      <RouterProvider router={router} />
    </AOSWrapper>
  </StrictMode>,
);
