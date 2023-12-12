import type { FC } from 'react';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
  );
}

export default Search;
