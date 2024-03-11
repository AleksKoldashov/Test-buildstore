import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './page/Blog';
import FormLogin from './components/FormLogin.jsx'
import Work from './page/Work.jsx';
import {Provider} from 'react-redux';
import { store } from './redux/store/store.js';
import FormReg from './components/FormReg.jsx';
import './firebase'
import WorkDetail from './page/work/WorkDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/work/1",
    element: <WorkDetail/>,
  },
  {
    path: "/login",
    element: <FormLogin/>,
  },
  {
    path: "/reg",
    element: <FormReg/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);
