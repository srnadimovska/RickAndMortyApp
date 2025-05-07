

const SearchComponent = ({ searchTerm, onSearchTerm }) => {
    const handleChange = (e) => {
        onSearchTerm(e.target.value)
    }

    return (
        <div>
            <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            />
        </div>
    )
}

export default SearchComponent