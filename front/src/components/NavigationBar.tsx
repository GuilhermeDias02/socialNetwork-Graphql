import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige vers l'accueil après déconnexion
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        
        <Navbar.Brand as={Link} to="/">
          GraphQL
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            
            {isAuthenticated ? (
              <>
                
                <NavDropdown title="Compte" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">Profil</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Déconnexion
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register">Inscription</Nav.Link>
                <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
