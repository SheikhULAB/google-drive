import { useState } from 'react';
import './App.css';
import Filesview from './components/Filesview/Filesview';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SideIcons from './components/SideIcons/SideIcons';

function App() {
  const [user, setUser] = useState({
    displayName: "Sheikh Yeamin",
    email: "yeaminsheikh7@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://pbs.twimg.com/profile_images/1517185752895229954/YbFoWUJU_400x400.jpg"
  })
  return (
    <div className="app">
       <Header userPhoto={user.photoURL} />
       <div className="app__main">
        <Sidebar />
        <Filesview />
        <SideIcons />
       </div>
    </div>
  );
}

export default App;
