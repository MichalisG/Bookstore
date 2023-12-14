import type { FC } from 'react';
import { useBook } from '../hooks/useBook';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BookPreview from '../components/Books/BookPreview';
interface BookPageProps {}

const BookPage: FC<BookPageProps> = () => {
  const { bookId } = useParams();
  const {book, error} = useBook(bookId);
  const navigate = useNavigate();

  if (error === 404) {
    navigate('/404');
  }

  return book ? (
    <div className='p-8'>
      <BookPreview book={book}/>
    </div>
  ) : null; // TODO add skeleton
}

export default BookPage;
