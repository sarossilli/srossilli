import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './pages/PostDetails';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Amplify.configure(config);

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="posts/:id" element={<PostDetails />} />

    </Route>
  )
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='h-screen overflow-auto dark:bg-gray-900 bg-gray-200 dark:text-slate-200 bg-white dark:bg-slate-900'>
        <RouterProvider router={router} />
      </div >
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
