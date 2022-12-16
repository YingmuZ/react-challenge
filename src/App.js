import Image from './components/Image';
import UserInfo from './components/UserInfo';
import UserRepo from './components/UserRepo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-container'>
        <Image />
        <UserInfo />     
      </div>

      <div className='repo-container'>
        <UserRepo />
      </div>
     
    </div>
  );
}

export default App;
