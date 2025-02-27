import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 📌 Contexte d'authentification
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
        {/* ✅ Logo du site */}
        <Navbar.Brand as={Link} to="/">
          GraphQL
        </Navbar.Brand>

        {/* ✅ Bouton pour mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* ✅ Liens publics */}
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            
            {isAuthenticated ? (
              <>
                

                {/* ✅ Dropdown Déconnexion */}
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
                {/* ✅ Liens Connexion / Inscription */}
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
