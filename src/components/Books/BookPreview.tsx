import type { FC } from 'react';
import { IBook } from '../../interfaces/IBook';
import Icons from '../Icons';
import Rating from '../Rating';

interface BookPreviewProps {
  book: IBook
}

const getRandomArbitrary = (min: number, max: number) => Math.random() * (max - min) + min;

const BookPreview: FC<BookPreviewProps> = ({book}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <img src={book.coverImage} alt="book cover" className='w-60 h-auto'/>
        </div>
        <div className='mt-4'>
          <p><b>Authors:</b> {book.author}</p>
        </div>
      </div>
      <div className='pr-20 flex justify-start flex-col'>
        <h3 className='text-2xl font-bold mb-4'>{book.title}</h3>
        <div className='flex mb-4 items-center'>
          <b>Rating: </b> <Rating/>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
        </div>
        <p className='text-base'>{book.description}</p>
        <div className='flex'>
          <button className='btn btn-sm btn-neutral mt-2'><Icons.Heart/> Favorite</button>
          <button className='btn btn-sm btn-neutral m-2'><Icons.Share/> Share</button>
        </div>

        <div className='flex flex-col mt-4'>
          <p><b>Year:</b> {new Date(book.published).getFullYear()}</p>
          <p><b>Number of pages:</b> {book.pages}</p>
        </div>

        <div className='mt-4'>
          <p><b>Publisher:</b> {book.publisher}</p>
        </div>

        <div className='flex flex-col mt-4'>
          <p><b>ISBN-10:</b> {book.isbn}</p>
        </div>
        <div className='flex mt-4'>
          <b>Price:</b>
          <p className='text-accent ml-2'>${(getRandomArbitrary(1000, 10000) / 100).toFixed(2)}</p>
        </div>
        <div className='mt-4'>

          <button className='btn w-40 btn-primary mt-2'><Icons.Cart/> Buy</button>
        </div>
      </div>
    </div>
  );
}

export default BookPreview;
