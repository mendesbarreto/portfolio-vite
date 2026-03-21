import { QueryClientProvider } from '@tanstack/react-query';
import mixpanel from 'mixpanel-browser';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { queryClient } from './queryClient';
import { routeTree } from './routeTree.gen';
import { isLocalhost } from './lib/utils';

if (!isLocalhost) {
  mixpanel.init('d0d89609d7c6db05b69ee7d96c6df250', {
    autocapture: true,
    track_pageview: true,
    record_sessions_percent: 100, //records 100% of all sessions
    record_heatmap_data: true,
  });
}

const router = createRouter({ routeTree });
const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
