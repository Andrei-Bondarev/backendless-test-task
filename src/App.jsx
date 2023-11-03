import React from 'react';

import Tab from './components/tabs/tab';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/root/root';

import styles from './css/app.module.css'
import NotFound from './components/notFound/not-found';

const App = () => {
  const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div className={styles.wrapper}>
					<Root />
					<Tab />
				</div>
			),
			errorElement: <NotFound />,
		},
		{
			path: "tab/:tabId",
			element: (
				<div className={styles.wrapper}>
					<Root />
					<Tab />
				</div>
			),
			errorElement: <NotFound />,
		},
	]);
  return <RouterProvider router={router} />;
};
export default App;
