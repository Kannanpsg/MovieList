import React from "react";

import "./styles.css";




export default function App()
{

const users = [
  {
    image:
      "https://pbs.twimg.com/media/E4bfdoiXoAMHUlM.jpg",
    title: "Beast",
    body: "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
    rating: "IMDB RATING : 8",
    reviews: 1542,
    bogo: false,
    price: 44.99,
    repeatPrice: 42.74,
    options: true
  },
  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5211/875211-v",
    title: "Avengers",
    body: "After returning to the criminal underworld to repay a debt, John Wick discovers that an his life,John Wicklarge bounty has been put on his life",
    rating: "IMDB RATING : 6",
    reviews: 202,
    bogo: true,
    price: 11.99,
    repeatPrice: 11.39,
    options: true
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZmQ5NTBmMDgtZmRlMi00MDNmLTg1MWUtMTU3ZGZiMDQ3NzE0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    title: "valimai",
    body: "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April finds himself as the defender.",
    rating: "IMDB RATING :7",
    reviews: 808,
    bogo: false,
    price: 39.99,
    repeatPrice: 37.99,
    options: true
  },
  {
    image:
      "https://thumbs.gfycat.com/ImaginaryIdealisticHellbender-max-1mb.gif",
    title: "THE ANNABELLE",
    body: "Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the  of the defender city and its people",
    rating: "IMDB RATING :7",
    reviews: 580,
    bogo: false,
    price: 24.99,
    repeatPrice: 23.74,
    options: true
  },
  
  {
    image:
      "https://www.metaflix.com/wp-content/uploads/2020/10/Free-Guy-Movie-Poster-scaled.jpg",
    title: "Free Guy",
    body: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris",
    rating: "IMDB RATING :9",
    reviews: 580,
    bogo: false,
    price: 24.99,
    repeatPrice: 23.74,
    options: true
  },
];
return(
  <div className="App">
)



<div className="display-grid">
{users.map((ur) => (
<Msg image={ur.image} title={ur.title} rating={ur.rating} body={ur.body} />
 
 
))}
</div>
</div>
);
}


function Msg({ image, title, rating, body})
{
return(
    <div>
      <img className="user-image" src={image} alt={image}/>
      <h1 className="user-title">{title}</h1>
<h2 className="user-body">{body}</h2>
<h3>⭐⭐⭐⭐⭐</h3>
</div>);
}

