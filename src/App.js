import './App.css';
import LoginAndSignUp from './Components/LoginAndSignUp/LoginAndSignUp';
import ParentRoute from './Components/ParentRoute';

import ContextProvider from './Context/ContextProvider';
function App() {
  return (
    <ContextProvider>
    <ParentRoute/>
    </ContextProvider>
    // <Login/>
  );
}

export default App;
