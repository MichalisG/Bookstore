import type { FC } from 'react';
import { IBook } from '../../interfaces/IBook';
import Book from './Book';

interface BooksProps {
  books: IBook[]
}

const Books: FC<BooksProps> = ({books}) => {

  return (
    <div className="flex flex-wrap mt-8 justify-center">
      {books.map((book, i) => (<Book book={book}/> ))}
    </div>
  );
}

export default Books;
