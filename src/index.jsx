import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import TabProvider from './context/tabContext';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <TabProvider>
    <App />
  </TabProvider>,
);
