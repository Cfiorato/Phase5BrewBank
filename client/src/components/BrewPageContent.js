import BrewPageComments from './BrewPageComments'
import * as MdIcons from "react-icons/md"

function BrewPageContent({ brewery }){
  return(
    <div className="brewPageContent">
      <img src={brewery.image} alt={brewery.name} />
      <h2>{brewery.name}</h2>
      <h3>{brewery.brewery_type}</h3>
      <span className="address">
        <MdIcons.MdLocationOn />
        {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}
      </span>
      <span className="phone">
        <MdIcons.MdPhone />
        {brewery.phone}
      </span>
      <span className="website">
        <MdIcons.MdLink />
        <a href={brewery.website}>{brewery.website}</a>
      </span>
      <BrewPageComments brewery={brewery}/>
    </div>
  )
}

export default BrewPageContent