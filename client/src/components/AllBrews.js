import BreweryCard from "./BreweryCard"
import BrewSearch from "./BrewSearch"
import { useState, useEffect } from 'react'
import Loading from "./Loading"

function AllBrews(){
  const [srch, setSrch] = useState("")
  const [brews, setBrews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('http://localhost:3000/breweries')
    .then(resp => resp.json())
    .then(resp => setBrews(resp))
  }, [])

  const filteredBrews = brews.filter(brew => {
    return (
      brew.name.toLowerCase().includes(srch)
      ||
      brew.postal_code.toString().includes(srch)
      ||
      brew.city.toLowerCase().includes(srch)
    )
  })

  const min = (page === 1 ? 0 : (page * 6))
  const max = min + 6
  const currentBrews = filteredBrews.slice(min, max)

  return (brews.length > 0 ? 
    <div className="allBrews">
      <h2>All Breweries</h2>
      <BrewSearch srch={srch} setSrch={setSrch} page={page} setPage={setPage}/>
      <div className="brewGrid">
        {currentBrews.length > 0 ? 
          currentBrews.map(brew => {
            return <BreweryCard brew={brew} />
          })
          :
          <h2>No Results Found</h2>
        }
      </div>
      
    </div>
    :
    <Loading />
  )
}

export default AllBrews