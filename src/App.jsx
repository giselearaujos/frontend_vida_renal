import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom'
import './styles/reset.css';
import * as Styled from "./App.styles";
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [showHeaderAndSidebar, setShowHeaderAndSidebar] = useState(true);

  useEffect(() => {    
    if (location.pathname === '/') {
      setShowHeaderAndSidebar(false);
    } else {
      setShowHeaderAndSidebar(true);
    }
  }, [location]);

  return (
  <Styled.AppContainer>
    { showHeaderAndSidebar && (
      <>
        <Sidebar />
        <Header/>
      </>
    )}
    <Styled.MainContainer>
      <Outlet />
    </Styled.MainContainer>
  </Styled.AppContainer>
  )
}

export default App
