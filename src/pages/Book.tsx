import type { FC } from 'react';
import { useBook } from '../hooks/useBook';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BookPreview from '../components/Books/BookPreview';
import Reviews from '../components/Reviews';
import Carousel from '../components/Carousel/Carousel';
import { useSearchBooks } from '../hooks/useSearchBooks';
import { shuffleArray } from '../utils/array';
interface BookPageProps {}

const BookPage: FC<BookPageProps> = () => {
  const { bookId } = useParams();
  const {book, error} = useBook(bookId);
  const {books} = useSearchBooks('')

  const navigate = useNavigate();

  if (error === 404) {
    navigate('/404');
  }

  return book ? (
    <div className='p-8'>
      <BookPreview book={book}/>
      <div className='pb-8 pt-8'>
        <h2 className='text-2xl font-bold p-4'>Other Books you may like</h2>
        <Carousel books={shuffleArray(books)}/>
      </div>
      <Reviews reviews={[1,2,3,4]}/>
    </div>
  ) : null; // TODO add skeleton
}

export default BookPage;
