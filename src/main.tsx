import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GifyProvider } from './contexts/GifyContext/GifyContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GifyProvider>
      <App />
    </GifyProvider>
  </QueryClientProvider>
)
