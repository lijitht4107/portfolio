import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import PersonalDetails from './Components/Address.jsx';
import PersonalDetailsNav from './Components/PersonalDetailsNav.jsx';
import Address from './Components/Address.jsx';
import Contacts from './Components/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path:'/personaldetails-nav',
        element: <PersonalDetailsNav />
      },
      {
        path:'/address',
        element:<Address />
      },
      {
        path:'/contactdetails',
        element:<Contacts />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>,
)
