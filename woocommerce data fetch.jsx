// fetch data 

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost",
  consumerKey: "ck_cb25dc94616dc8755ee4bdb27fc053061847a9a3",
  consumerSecret: "cs_bd7f98b14211ac944ff8038fd24ece7c7322423f",
  version: "wc/v2",
  wpAPI: true,
  queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
});

// const [data, setData] = useState([]);

WooCommerce.get("products?page=1")
  .then((response) => {
    console.log(response.data);
    // setData(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });

//   fetch data end 


// Create product 

const data = {
    name: "Premium Quality",
    type: "simple",
    regular_price: "21.99",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    categories: [
      {
        id: 9
      },
      {
        id: 14
      }
    ],
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
        position: 0
      },
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
        position: 1
      }
    ]
  };
  
  WooCommerce.post("products", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });

    // create product end 