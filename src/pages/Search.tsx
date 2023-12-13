import type { ChangeEvent, FC } from 'react';
import Input from '../components/Input';
import { useSearchParams } from 'react-router-dom';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('value') ?? ''
  return (
    <div className='p-8'>
      <h1 className='w-full text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>Search to find your new book</h1>
      <p text-center className="w-full text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Discover Your Next Read: Navigate Through Search</p>
      <Input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchParams(`value=${e.target.value}`)
        }}
      />
    </div>
  );
}

export default Search;
