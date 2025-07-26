import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Component/Body/Body.jsx';
import Structure from './Component/Structure/Structure.jsx';
import ListedBooks from './Component/Listed-Books/ListedBooks.jsx';
import PagestoRead from './Component/Pages-to-Read/PagestoRead.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        index: true,
        element: <Structure></Structure>
      },
      {
        path: '/listbook',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pageread',
        element: <PagestoRead></PagestoRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
