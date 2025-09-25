import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedCourseProvider } from './contexts/SelectedCourseContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SelectedCourseProvider>
        <App />
      </SelectedCourseProvider>
    </QueryClientProvider>
  </StrictMode>,
)
