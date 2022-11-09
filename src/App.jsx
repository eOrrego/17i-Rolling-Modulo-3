import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ActionTypes, useContextState } from './context/contextState';
import PublicRoutes from './Routes/PublicRoutes';

const App = () => {
  const { setContextState } = useContextState();
  useEffect(() => {
    const haveUser = JSON.parse(localStorage.getItem('users'));
    if (haveUser) {
      setContextState({ type: ActionTypes.SET_USER_LOGIN, value: true });
    }
  }, []);
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default App;
