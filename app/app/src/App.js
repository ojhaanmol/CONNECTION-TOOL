import './App.css';

import Sidebar from './sidebar';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
