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
      <div className="container">
        <span className="navbar-brand">
          {title}
        </span>
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
                    ? 'btn btn-warning text-decoration-none mx-2 text-black'
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
                    ? 'btn btn-warning text-decoration-none mx-2 text-black'
                    : 'btn btn-secondary text-decoration-none mx-2 text-white'
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
                    ? 'btn btn-warning text-decoration-none mx-2 text-black'
                    : 'btn btn-secondary text-decoration-none mx-2 text-white'
                }
              >
                Contact
              </NavLink>
            </li>
            {
              contextState.userData.role === "ADMIN" &&(

            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? 'btn btn-warning text-decoration-none mx-2 text-black'
                    : 'btn btn-secondary text-decoration-none mx-2 text-white'
                }
              >
                ADMIN
              </NavLink>
            </li>
              )
            }
            <li className="ms-5">
            <span className='ms-5 me-2 text-white'>{contextState.userData.name}</span>
              <Button
                className="btn btn-danger text-decoration-none mx-2 text-white p-2"
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
                  className="btn btn-primary text-decoration-none mx-2 text-white p-2"
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
