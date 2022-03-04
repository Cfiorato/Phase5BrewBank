

function BrewSearch({ srch, setSrch, setPage }) {

  function handleSearch(e){
    setSrch(e.target.value.toLowerCase())
    setPage(1)
  }

  return(
    <div className="searchBar">
      <input 
        type="text" 
        placeholder="Search Breweries..."
        value={srch}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  )
}

export default BrewSearch