import type { FC } from 'react';
import Card from '../Card';
import { IBook } from '../../interfaces/IBook';

interface BooksProps {
  books: IBook[]
}

const Books: FC<BooksProps> = ({books}) => {

  return (
    <div className="flex flex-wrap mt-8 justify-center">
      {books.map((book, i) => (
        <Card
          title={book.title}
          subtitle={book.description}
          image={book.coverImage}
          button='Buy Now'
        />
      ))}
    </div>
  );
}

export default Books;
