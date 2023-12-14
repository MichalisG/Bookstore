import type { FC } from 'react';
import { IBook } from '../../interfaces/IBook';
import Icons from '../Icons';

interface BookPreviewProps {
  book: IBook
}

const BookPreview: FC<BookPreviewProps> = ({book}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex justify-center bg-blue-50'>
        <img src={book.coverImage} alt="book cover" className='w-60'/>
      </div>
      <div className='pr-20 flex justify-start flex-col bg-pink-100'>
        <h3 className='text-2xl font-bold mb-4'>{book.title}</h3>
        <p className='text-base'>{book.description}</p>
        <div className='flex'>
          <button className='btn btn-sm btn-neutral m-2'><Icons.Heart/> Favorite</button>
          <button className='btn btn-sm btn-neutral m-2'><Icons.Share/> Share</button>
        </div>

        <div className='flex flex-col'>
          <p><b>Year:</b> {new Date(book.published).getFullYear()}</p>
          <p><b>Number of pages:</b> {book.pages}</p>
        </div>

        <div className='mt-4'>
          <p><b>Publisher:</b> {book.publisher}</p>
        </div>

        <div className='flex flex-col mt-4'>
          <p><b>ISBN-10:</b> {book.isbn}</p>
        </div>
        <div className='mt-4'>
          <button className='btn w-40 btn-primary m-2'><Icons.Cart/> Buy</button>
        </div>
      </div>
    </div>
  );
}

export default BookPreview;
