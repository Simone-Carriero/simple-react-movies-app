const SearchBox = ({ searchValue, handleChange }) => {
  return (
    <form
      className='d-flex'
      role='search'>
      <input
        className='form-control'
        type='search'
        placeholder='Search...'
        aria-label='Search'
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBox;
