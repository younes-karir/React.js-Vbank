import './App.css';
import Home from './pages/index';
import Signin from './pages/Signin'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GreenTheme from './themes/Green';
import OrangeTheme from './themes/Orange';
import LoadingUI from './components/LoadingUI';
import { Route, Routes} from 'react-router-dom'




function App() {
  const [theme, setTheme] = useState(GreenTheme);
  const [isLoading, setIsLoading] = useState(false);


  const changeTheme = () => {
    setIsLoading(true);

    setTheme((old) => {
      if (old.id === 'G') {

        return OrangeTheme;
      }

      else {
        return GreenTheme;
      }

    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }






  return (
    <div className="App">
      <ThemeProvider theme={{ current: theme, onChange: changeTheme }} >
        {/* <Routes basename="/test_repository">
          <Route path='/' exact element={<Home />} />
          
          <Route path='/signin' element={<Signin />}  />
        </Routes> */}
        <Home />
        <LoadingUI isLoading={isLoading} />
      </ThemeProvider>
    </div>
  );
}

export default App;
