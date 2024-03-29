import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard/DashBoard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import SendMoney from './components/SendMoney';
import HomePage from './components/Home/HomePage';
import Home from './components/Home/Home';

const Router = createBrowserRouter([
  {path: '/', element: <HomePage />,
    children: [
      {index: true, element: <Home />},
      {path: 'dashboard', element: <Dashboard />},
      // {path: 'signup', element: <Signup />},
      // {path: 'signin', element: <Signin />},
      {path: 'send', element: <SendMoney />}
    ]
  }
])

function App() {
  return <RouterProvider router={Router} />
}

export default App
  