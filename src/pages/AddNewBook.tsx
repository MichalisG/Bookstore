import type { FC } from 'react';
import NewBookForm from '../forms/NewBookForm';
interface AddNewBookProps {}

const AddNewBook: FC<AddNewBookProps> = () => {
  return (
  <div className='p-8'>
    <h1 className='w-full text-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Add new Book</h1>
    <p text-center className="w-full text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Complete the Book Entry Form: Add a New Title</p>
    <NewBookForm />
  </div>);
}

export default AddNewBook;
