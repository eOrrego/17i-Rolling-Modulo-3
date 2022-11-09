import { Formik } from 'formik';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ActionTypes, useContextState } from '../../context/contextState';
import { schemaFormRegister } from '../../utils/ValidateForms/validateForms';

const FormRegister = () => {
  const { contextState, setContextState } = useContextState();
  useEffect(() => {
    console.log(contextState.userLogged);
  }, [contextState.userLogged])
  return (
    <Formik
      validationSchema={schemaFormRegister}
      onSubmit={(values, actions) => {
        localStorage.setItem('users', JSON.stringify(values));
        setContextState({
          type: ActionTypes.SET_USER_LOGIN,
          value: true,
        })
        actions.resetForm();
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false,
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
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
                feedback={errors.firstName}
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
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
          <Form.Group className="mb-3 mt-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit" disabled={isSubmitting}>Registrarse</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;
