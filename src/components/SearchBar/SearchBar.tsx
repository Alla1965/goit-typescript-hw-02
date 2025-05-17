import { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import style from "./SearchBar.module.css";

interface Props {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(trimmedQuery);
    setQuery('');
  };

  return (
    <header>
      <form className={style.formSearch} onSubmit={handleSubmit}>
        <div className={style.searchBox}>
          <input
            className={style.inputSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
          <button
            className={style.searchButton}
            type="submit"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 015.292 13.708l4.5 4.5a1 1 0 01-1.415 1.415l-4.5-4.5A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
