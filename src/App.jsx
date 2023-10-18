import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom'
import './styles/reset.css';
import * as Styled from "./App.styles";

function App() {

  return (
  <Styled.AppContainer>
    <Sidebar />
    <Header/>
      <Styled.MainContainer>
        <Outlet />
      </Styled.MainContainer>
  </Styled.AppContainer>
  )
}

export default App
