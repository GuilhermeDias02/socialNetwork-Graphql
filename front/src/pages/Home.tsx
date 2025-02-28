import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Spinner, Form, Button, InputGroup } from 'react-bootstrap';
import {
  useGetAllArticlesQuery,
  useGetArticlesByUsernameQuery,
  usePostLikeArticleMutation,
  useDeleteLikeArticleMutation,
  usePostCommentaireMutation,
  usePatchCommentaireMutation,
  useDeleteCommentaireMutation,
  useGetLastArticlesQuery 
} from "../generated/graphql";
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  username: string;
  exp: number;
}

const Home: React.FC = () => {
  const { data, loading, error, refetch } = useGetAllArticlesQuery();
  const [searchUsername, setSearchUsername] = useState<string>('');
  const { data: searchData, refetch: searchRefetch } = useGetArticlesByUsernameQuery({
    variables: { username: searchUsername },
    skip: !searchUsername,
  });
  const [showLastArticles, setShowLastArticles] = useState<boolean>(false);
  const { data: lastArticlesData, refetch: lastArticlesRefetch } = useGetLastArticlesQuery({
    skip: !showLastArticles, 
  });
  
  const location = useLocation();
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});
  const [editingComment, setEditingComment] = useState<{ id: string; text: string } | null>(null);

  const [postLikeArticle] = usePostLikeArticleMutation();
  const [deleteLikeArticle] = useDeleteLikeArticleMutation();
  const [postCommentaire] = usePostCommentaireMutation();
  const [patchCommentaire] = usePatchCommentaireMutation();
  const [deleteCommentaire] = useDeleteCommentaireMutation();
  
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setLoggedInUsername(decoded.username);
      } catch (error) {
        console.error("❌ Erreur lors du décodage du token :", error);
        setLoggedInUsername(null);
      }
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [location, refetch]);

  useEffect(() => {
    if (searchUsername) {
      searchRefetch();
    }
  }, [searchUsername, searchRefetch]);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <p className="text-danger text-center mt-5">Erreur de chargement des articles.</p>;

  const articles = showLastArticles
  ? lastArticlesData?.getLastArticles || []
  : searchUsername
  ? searchData?.getArticlesByUsername || []
  : data?.getArticles || [];


  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Articles</h1>

      <Form className="mb-4 w-50 mx-auto">
        <Form.Group controlId="searchUsername">
          <Form.Control
            type="text"
            placeholder="Rechercher par nom d'utilisateur..."
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
  variant={showLastArticles ? "dark" : "outline-dark"}
  className="mb-3"
  onClick={() => {
    setShowLastArticles(!showLastArticles);
    if (!showLastArticles) {
      lastArticlesRefetch(); 
    }
  }}
>
  {showLastArticles ? "Afficher tous les articles" : "Afficher les 20 derniers articles"}
</Button>

      {articles?.map((article: string) => {
        const isLiked = loggedInUsername
          ? article.likes.some((like: string) => like.user.username === loggedInUsername)
          : false;

        return (
          <Card key={article.id} className="shadow-sm mb-3 w-100">
            <Card.Body>
              <Card.Title className="text-primary">{article.user?.username || "Auteur inconnu"}</Card.Title>
              <Card.Text>{article.text}</Card.Text>
              <small className="text-muted">Publié le {article.postDate ? new Date(article.postDate).toLocaleDateString() : "Date inconnue"}</small>
              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  {article.commentaires.length} commentaire(s) • {article.likes.length} like(s)
                </small>
                {loggedInUsername && (
                  <Button
                    variant={isLiked ? "danger" : "outline-primary"}
                    size="sm"
                    onClick={() => {
                      isLiked
                        ? deleteLikeArticle({ variables: { articleId: article.id } })
                        : postLikeArticle({ variables: { articleId: article.id } });
                      refetch();
                    }}
                  >
                    {isLiked ? "❤️ Unlike" : "🤍 Like"}
                  </Button>
                )}
              </div>

              <hr />

              
<div>
{article.commentaires.map((comment: string) => (
  <div key={comment.id} className="mb-2">
    <strong>{comment.user.username}</strong>: 
    {editingComment?.id === comment.id ? (
      <>
        <input 
          type="text" 
          value={editingComment.text} 
          onChange={(e) => setEditingComment({ id: editingComment.id, text: e.target.value })} 
        />
        <Button size="sm" variant="success" onClick={() => {
          patchCommentaire({ variables: { patchCommentaireId: comment.id, text: editingComment.text } });
          setEditingComment(null);
          refetch();
        }}>
          Sauvegarder
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setEditingComment(null)}>
          Annuler
        </Button>
      </>
    ) : (
      <>
        <span> {comment.text}</span>
        {loggedInUsername === comment.user.username && (
          <>
            <Button size="sm" variant="warning" onClick={() => setEditingComment({ id: comment.id ?? '', text: comment.text })}>
              Modifier
            </Button>
            <Button size="sm" variant="danger" onClick={() => {
              deleteCommentaire({ variables: { deleteCommentaireId: comment.id } });
              refetch();
            }}>
              Supprimer
            </Button>
          </>
        )}
      </>
    )}
  </div>
))}
</div>
{loggedInUsername && (
<InputGroup className="mt-3">
<Form.Control placeholder="Ajouter un commentaire..." value={commentText[article.id] || ''} onChange={(e) => setCommentText({ ...commentText, [article.id]: e.target.value })} />
<Button variant="primary" onClick={() => {
  postCommentaire({ variables: { articleId: article.id, text: commentText[article.id] } });
  setCommentText({ ...commentText, [article.id]: '' });
  refetch();
}}>Envoyer</Button>
</InputGroup>
  )}
</Card.Body>
</Card>
);
})}
</Container>
);
};

export default Home;
