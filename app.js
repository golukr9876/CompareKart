import fetch from 'node-fetch';

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {

  res.render("index");
});
let ser1;

let url1;
let url4;
let arr = [];

app.post("/search", async (req, res) => {
  arr = [];
  let { search } = req.body;

  let ser = search.split(" ");
  ser1 = ser.join("+");

  console.log(ser1);


  url1 = `https://real-time-amazon-data.p.rapidapi.com/search?query=${ser1}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;











  url4 = `https://ebay-search-result.p.rapidapi.com/search/${ser1}`;






  const option1 = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '1c3a277bfcmsh609a00c8f0ea491p1e64bfjsn190b9d17acdb',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  const option2 = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '1c3a277bfcmsh609a00c8f0ea491p1e64bfjsn190b9d17acdb',
      'x-rapidapi-host': 'walmart2.p.rapidapi.com'
    }
  };
  const option3 = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '1c3a277bfcmsh609a00c8f0ea491p1e64bfjsn190b9d17acdb',
      'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
    }
  };

  const option4 = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'bc0d085adfmsh0516debfe5dbc93p15d38ejsn9aee11dd86e6',
      'x-rapidapi-host': 'ebay-search-result.p.rapidapi.com'
    }
  };



  try {
    const response = await fetch(url1, option1);
    const result = await response.json();
    // console.log(result);
    for (let produc of result.data.products) {
      let dis = (parseFloat(produc.product_original_price) - parseFloat(produc.product_price)) / produc.product_original_price * 100;
      let discount = '${dis}';

      let data = {
        price: Number(produc.product_price.slice(1)),
        img: produc.product_photo,
        rate: produc.product_star_rating,
        logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
        link: produc.product_url,
        delivery: produc.delivery,
        origprice: produc.product_original_price,
        title: produc.product_title,

      };
      arr.push(data);
    }


  }
  catch (error) {
    console.error(error);
  }



  try {
    const response = await fetch(url4, option4);
    const result = await response.json();
    for (let produc of result.results) {

      let data = {
        title: produc.title,
        price: Math.floor(Number(produc.price.split(" ")[0].slice(1)) * 86.2),
        img: produc.image,
        rate: produc.rating,
        logo: "https://toppng.com/public/uploads/preview/ebay-logo-png-free-116595208094xxekfbthb.png",
        link: produc.url,
        delivery: produc.shipping
      };
      arr.push(data);
    }
    console.log(arr);

  } catch (error) {
    console.error("error", error);
  }
  arr.sort((a, b) =>

    a.price - b.price

  );

  res.redirect("home");
});

app.get('/home', (req, res) => {
  console.log(url1);
  res.render("home", { products: arr });
});





app.listen(8000);