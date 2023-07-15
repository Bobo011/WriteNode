import {doc, deleteDoc} from 'firebase/firestore'
import { auth,db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export const PostCard = ({ post,toggle,setToggle }) => {
  const navigate = useNavigate();
  const { id, title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem('isAuth'));


async function handleDelete(){
const document =  doc(db,'post', id)

await deleteDoc(document);
navigate('/')
setToggle(!toggle)
}

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        {author && author.name && <span className="author">{author.name}</span>}
        {isAuth && author && author.id === auth.currentUser.uid && (
          <span onClick={handleDelete} className="delete">
            <i className="bi bi-trash3"></i>
          </span>
        )}
      </p>
    </div>
  );
};
