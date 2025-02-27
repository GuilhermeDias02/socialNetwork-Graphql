import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
  Modal,
} from "react-bootstrap";

import { useGetArticlesByUserQuery } from "../generated/graphql";
import { usePostArticleMutation } from "../generated/graphql";
import { usePatchArticleMutation } from "../generated/graphql";
import { useDeleteArticleMutation } from "../generated/graphql";

interface DecodedToken {
  userId: string;
  exp: number;
}

const Profile: React.FC = () => {
  const [articleText, setArticleText] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [editArticle, setEditArticle] = useState<{ id: string; text: string } | null>(null);
  const [deleteArticleId, setDeleteArticleId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const [postArticle, { loading: posting }] = usePostArticleMutation();
  const [patchArticle, { loading: updating }] = usePatchArticleMutation();
  const [deleteArticle, { loading: deleting }] = useDeleteArticleMutation();

  // Récupérer userId depuis le token JWT
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setUserId(decoded.id);
      } catch (error) {
        console.error("❌ Erreur lors du décodage du token :", error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  // Requête pour récupérer les articles de l'utilisateur connecté
  const { data, loading, error, refetch } = useGetArticlesByUserQuery({
    variables: { userId },
    skip: !userId, // 🔹 Évite de faire la requête si `userId` est null
  });

  //  Ajouter un article
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const { data } = await postArticle({ variables: { text: articleText } });

      if (data?.postArticle?.success) {
        setSuccessMessage("✅ Article publié avec succès !");
        setArticleText("");
        refetch();
      } else {
        setErrorMessage(data?.postArticle?.message || "❌ Erreur inconnue.");
      }
    } catch (error) {
      console.error("❌ Erreur lors de la publication de l'article :", error);
      setErrorMessage("Impossible de publier l'article.");
    }
  };

  //  Modifier un article
  const handleEditArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editArticle) return;
  
    try {
      const { data } = await patchArticle({
        variables: { patchArticleId: editArticle.id, text: editArticle.text },
      });
  
      if (data?.patchArticle?.code === 204) {
        setSuccessMessage("✅ Article modifié avec succès !");
        setErrorMessage(null); 
        setEditArticle(null); 
        await refetch();  
      } else {
        setErrorMessage(data?.patchArticle?.message || "❌ Une erreur est survenue.");
        setSuccessMessage(null); 
      }
    } catch (error) {
      console.error("❌ Erreur lors de la modification :", error);
      setErrorMessage("Impossible de modifier l'article.");
      setSuccessMessage(null); 
    }
  };  
    

  // Supprimer un article
  const handleDeleteArticle = async () => {
    if (!deleteArticleId) return;
  
    try {
      const { data } = await deleteArticle({ variables: { deleteArticleId } });
  
      if (data?.deleteArticle?.code === 204) {
        setSuccessMessage("✅ Article supprimé avec succès !");
        setErrorMessage(null); 
        setDeleteArticleId(null);
        setShowDeleteModal(false);
        await refetch();  
      } else {
        setErrorMessage(data?.deleteArticle?.message || "❌ Une erreur est survenue.");
        setSuccessMessage(null); 
      }
    } catch (error) {
      console.error("❌ Erreur lors de la suppression :", error);
      setErrorMessage("Impossible de supprimer l'article.");
      setSuccessMessage(null); 
    }
  };
  
  

  return (
    <Container className="d-flex flex-column align-items-center mt-4">
     
      <Card className="p-4 shadow-sm w-50">
        <Card.Title>Créer un nouvel article</Card.Title>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Texte de l'article</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100" disabled={posting}>
            {posting ? "Publication en cours..." : "Publier"}
          </Button>
        </Form>
      </Card>

      
      <Card className="p-4 shadow-sm w-50 mt-4">
        <Card.Title>Mes articles</Card.Title>
        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          data?.getArticlesByUser?.length > 0 ? (
            data.getArticlesByUser.map((article: any) => (
              <Card key={article.id} className="mb-3">
                <Card.Body>
                  {editArticle?.id === article.id ? (
                    <Form onSubmit={handleEditArticle}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows={2}
                          value={editArticle?.text || article.text} 
                          onChange={(e) =>
                            setEditArticle({ id: article.id, text: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Button variant="success" size="sm" type="submit" disabled={updating}>
                        {updating ? "Modification..." : "Sauvegarder"}
                      </Button>
                      <Button variant="secondary" size="sm" className="ms-2" onClick={() => setEditArticle(null)}>
                        Annuler
                      </Button>
                    </Form>
                  ) : (
                    <>
                      <Card.Text>{article.text}</Card.Text>
                      <Button variant="warning" size="sm" className="me-2"
                        onClick={() => setEditArticle({ id: article.id, text: article.text })}>
                        Modifier
                      </Button>
                      <Button variant="danger" size="sm"
                        onClick={() => { setDeleteArticleId(article.id); setShowDeleteModal(true); }}>
                        Supprimer
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>Aucun article publié pour le moment.</p>
          )
        )}
      </Card>

      
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer cet article ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Annuler</Button>
          <Button variant="danger" onClick={handleDeleteArticle} disabled={deleting}>
            {deleting ? "Suppression..." : "Supprimer"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
