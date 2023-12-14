import type { FC } from 'react';
import Card from '../Card';
import { IBook } from '../../interfaces/IBook';
import { Link } from 'react-router-dom';

interface BooksProps {
  books: IBook[]
}

const Books: FC<BooksProps> = ({books}) => {

  return (
    <div className="flex flex-wrap mt-8 justify-center">
      {books.map((book, i) => (
        <Link to={`/books/${book.isbn}`}>
          <Card
            title={book.title}
            subtitle={book.description}
            image={book.coverImage}
            button='Buy Now'
          />
        </Link>
      ))}
    </div>
  );
}

export default Books;
