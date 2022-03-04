import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function BeerPics() {
  return(
    <ImageList 
      className="beerPics"
      sx={{ width: "55vw", height: "80vh" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'https://cdn.hopculture.com/wp-content/uploads/2021/07/SunKingBrewing-1-LEAD.jpg',
    title: 'Cheers',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1554226200/photos/292855_original.jpg',
    title: 'Tap Room',
  },
  {
    img: 'https://www.exploreminnesota.com/sites/default/files/listing_images/24dc0b1de961e1ed7f5addb35d11b1daca6ea73a_19.jpg',
    title: 'Brewery',
  },
  {
    img: 'http://res.cloudinary.com/simpleview/image/upload/v1503590329/clients/desmoines/Breweries_and_Distilleries_in_Des_Moines_Iowa_7ba38015-d861-49dc-b195-3befdc0f564c.jpg',
    title: 'Flights',
    cols: 2,
  },
  {
    img: 'https://www.newzealand.com/assets/Tourism-NZ/Wellington/Parrotdog-Camilla-Rutherford__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNDksNDcsNzUsImpwZyIsNjUsMi41XQ.jpg',
    title: 'Tap',
    cols: 2,
  },
  {
    img: 'https://docentbrewing.com/wp-content/uploads/2014/05/docent_brewing_san_juan_capistrano_mural_by_hoodzpah_2.jpg',
    title: 'Docent Brewing',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://static.wixstatic.com/media/658b0d_d8c2eb39b10540b081d8c9819c07d56f~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_640,h_518,al_c,q_80,usm_0.66_1.00_0.01/658b0d_d8c2eb39b10540b081d8c9819c07d56f~mv2_d_7360_4912_s_4_2.webp',
    title: 'Beer',
  },
  {
    img: 'http://www.bellsbeer.com/sites/all/themes/bells_theme/img/defaultSocial.jpg',
    title: 'Bells Brewing',
  },
  {
    img: 'https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/edpgzbnh/e685fc24-5d3e-41ac-a7d5-693e2e0af921.jpeg',
    title: 'Kegs',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.vox-cdn.com/thumbor/hXgqfyDgY2edWxXEY_z4lnXyc5U=/0x0:1500x1001/1200x900/filters:focal(619x580:859x820)/cdn.vox-cdn.com/uploads/chorus_image/image/63090121/web_15_093923_DSC_3814_ed1.0.jpg',
    title: 'Silver Moon Brewing',
  },
  {
    img: 'https://hiwirebrewing.com/wp-content/uploads/2021/03/BigTop_Slider.jpg',
    title: 'Hi-Wire Brewing',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5bda12fdf2e6b1de2d88bfd6/1590160906482-3U96ZH2UZTC3OI7UUDM9/Burger.jpg?format=2500w',
    title: 'BooJum Brewing Company',
    cols: 2,
  },
];


export default BeerPics