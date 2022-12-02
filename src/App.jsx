import { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { ActionTypes, useContextState } from './context/contextState';
import PublicRoutes from './Routes/PublicRoutes';
import { getLocalStorage } from './utils/localStorageHelper';

const App = () => {
  const { setContextState } = useContextState();

  useEffect(() => {
    const haveUser = getLocalStorage('token');
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
