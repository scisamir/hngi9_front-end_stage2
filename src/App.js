import './App.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />
  }
])

function App() {
  return (
    <div id='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
