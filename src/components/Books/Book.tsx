import type { FC } from 'react';
import Card from '../Card';
import { IBook } from '../../interfaces/IBook';
import { Link } from 'react-router-dom';

interface BooksProps {
  book: IBook
}

const Books: FC<BooksProps> = ({book}) => {

  return (
    <Link to={`/books/${book.isbn}`}>
      <Card
        title={book.title}
        subtitle={book.description}
        image={book.coverImage}
        button='Buy Now'
      />
    </Link>
  );
}

export default Books;
