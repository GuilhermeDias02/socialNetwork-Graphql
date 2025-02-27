import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container, Alert, Spinner, InputGroup } from 'react-bootstrap';
import { useRegisterMutation } from '../generated/graphql';
import { FaUser, FaLock } from 'react-icons/fa'; 

const Register: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [register, { loading, error }] = useRegisterMutation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await register({ variables: formData });

      if (data?.createUser.success) {
        navigate('/login'); 
      } else {
        setErrorMessage(data?.createUser.message || "Échec de l'inscription.");
      }
    } catch (err) {
      setErrorMessage("Erreur d'inscription. Veuillez réessayer.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card className="shadow p-4" style={{ width: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Inscription</h2>

          
          {errorMessage && <Alert variant="danger" className="text-center">{errorMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>Nom d'utilisateur</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Entrez votre nom d'utilisateur"
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <InputGroup>
                <InputGroup.Text><FaLock /></InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Entrez votre mot de passe"
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "S'inscrire"}
            </Button>
          </Form>

          <div className="text-center mt-3">
            <small>Déjà un compte ? <a href="/login">Se connecter</a></small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
