//import logo from './logo.svg';
import './App.css';
import Header from "./Header"; 
import Sidebar from './Sidebar'; 
import Body from './Body'; 

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_main">
        <Sidebar />
        <Body />
      </div>
      
    </div>
  );
}

export default App;
