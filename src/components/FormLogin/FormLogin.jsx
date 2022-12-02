import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { ActionTypes, useContextState } from '../../context/contextState';
import { userLogin } from '../../services/userService';
import { setLocalStorage } from '../../utils/localStorageHelper';
import { schemaFormLogin } from '../../utils/ValidateForms/validateForms';

const FormLogin = () => {
  const { setContextState } = useContextState();
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={schemaFormLogin}
      onSubmit={async (values, actions) => {
        const {data} = await userLogin({
          email: values.email,
          password: values.password,
        })
        setContextState({
          type: ActionTypes.SET_USER_LOGIN,
          value: true,
        })
        setContextState({
          type: ActionTypes.SET_USER_DATA,
          value: data.userData,
        })
        setLocalStorage('token', data.token)
        setLocalStorage('user', data.userData)
        if (data.userData.isVerified && data.userData.role === "ADMIN") {
          console.log(data.userData.isVerified, data.userData.role)
          navigate('/admin')
        }
        actions.resetForm();
      }}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
                feedback={errors.email}
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
                feedback={errors.password}
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={isSubmitting}>Iniciá Sesión</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
