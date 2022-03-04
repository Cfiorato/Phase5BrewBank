

function BrewPageComments({ brewery }) {
  return(
    <div className="brewComments">
      {brewery.comments.map(comment => {
        return(
          <div className="comment">
            <h3>{comment.user}</h3>
            <p>{comment.posted_at}</p>
            <h3>{comment.comment}</h3>
            <h3>{comment.rating}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default BrewPageComments