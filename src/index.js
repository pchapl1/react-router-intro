import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';


// const router =  createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <HomePage/>  
//     },
//     {
//       path: "/about",
//       element: <AboutPage/>
//     },
//     {
//       path: "/contact",
//       element: <ContactPage/>
//     },

//   ]
//   )
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
        {
        index: true,
        element: <HomePage />,
        },
        {
        path: "/about",
        element: <AboutPage />,
        },
        {
        path: "/contact",
        element: <ContactPage />,
        },
      ],
    },
  ]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
