import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  const handleSearchEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      navigate(`/search?value=${searchValue}`);
    }
  }

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onKeyDown={handleSearchEnter}
        onChange={e => {
          setSearchValue(e?.target.value)
        }}  
      />
    </div>
  );
}

export default Search;
