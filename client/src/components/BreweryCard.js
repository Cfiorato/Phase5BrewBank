import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

function BreweryCard({ brew }){
  return(
    <div className="brewCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={brew.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {brew.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {brew.brewery_type} in {brew.city}, {brew.state}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/allbrews/${brew.id}`}>More</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BreweryCard