import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ActionTypes, useContextState } from '../../context/contextState';
import FormRegister from '../FormRegister/FormRegister';
import FormLogin from '../FormLogin/FormLogin';
import ModalCustom from '../Modal/ModalCustom';

const Navbar = (props) => {
  const { title } = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const { contextState, setContextState } = useContextState();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setContextState({
      type: ActionTypes.SET_USER_LOGIN,
      value: false,
    });
    setContextState({
      type: ActionTypes.SET_USER_DATA,
      value: {},
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ModalCustom
        show={showModal}
        title="Registrate"
        handleClose={() => setShowModal(!showModal)}
        FormRegister={FormRegister}
      />
      <ModalCustom
        show={showModalLogin}
        title="Login"
        handleClose={() => setShowModalLogin(!showModalLogin)}
        FormRegister={FormLogin}
      />
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-decoration-none mx-3 text-white'
                    : 'text-decoration-none mx-3 text-danger'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? 'text-decoration-none mx-3 text-white'
                    : 'text-decoration-none mx-3 text-danger'
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-decoration-none mx-3 text-white'
                    : 'text-decoration-none mx-3 text-danger'
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="ml-5">
              <Button
                className="btn btn-danger ml-5"
                size="sm"
                onClick={
                  contextState.userLogged
                    ? () => logout()
                    : () => setShowModal(!showModal)
                }
              >
                {contextState.userLogged ? 'Cerrar Sesión' : 'Registrate'}
              </Button>
            </li>
            {!contextState.userLogged && (
              <li className="ml-5">
                <Button
                  className="btn btn-danger mx-3"
                  size="sm"
                  onClick={() => setShowModalLogin(!showModalLogin)}
                >
                  Login
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
