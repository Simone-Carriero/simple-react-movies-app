const SearchBox = ({searchValue, setSearchValue}) => {
    return (
        <div className='col-6'>
            <input
                className="form-control"
                type="search"
                placeholder="Type to search..."
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
            />
        </div>
    )
}

export default SearchBox