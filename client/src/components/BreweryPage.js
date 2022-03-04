import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import BrewPageContent from './BrewPageContent'

function BreweryPage() {
  let { id } = useParams()
  const [brewery, setBrewery] = useState()
  
  useEffect(() => {
    fetch(`http://localhost:3000/breweries/${id}`)
    .then(resp => resp.json())
    .then(data => setBrewery(data))
  }, [id])

  console.log(brewery ? true : false)

  return(
    <div className="brewPage">
      <h1>Brewery Page</h1>
      {brewery ? 
      <BrewPageContent brewery={brewery}/>
      :
      <Loading />
      }

    </div>
  )
}

export default BreweryPage