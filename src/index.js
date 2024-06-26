import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Note from "./note/Note.jsx";
import Plannings from "./planning/Plannings.jsx";

let connectedUser = null;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/notes",
    element: <Note />,
  },
  {
    path: "/plannings",
    element: <Plannings />,

},
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
