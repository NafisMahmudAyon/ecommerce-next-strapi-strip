// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";


import { useEffect, useState } from "react";

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const WooCommerce = new WooCommerceRestApi({
  //   url: "https://wp.sqaa-online.com/wp",
  //   consumerKey: "ck_1aa4fab92e00ecce8dd30a88f048c1fc750727fb",
  //   consumerSecret: "cs_75439587afbbfa3be22b9f8b2c755defb599d208",
  //   version: "wc/v2",
  //   wpAPI: true,
  //   queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
  // });
  
  // const [details, setDetails] = useState([]);
  
  // useEffect(() => {getDetails()}, []);
  // function getDetails() {
  //   WooCommerce.get("products?page=1")
  //     .then((response) => {
  //       console.log(response.data);
  //       setDetails(response.data);
  //       console.log("hello");
  //       console.log(details);
  //       // setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // }

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
      </Wrapper>
      {/* heading end  */}
      {/* wordpress data  */}
      {/* {Array.isArray(details) 
        ? details.map((detail) => {
          return (
            <div key={detail.id}>
              
              <h1>{detail.name}</h1>
              <img src={detail.images[0].src} alt="" />
            </div>
          )
        }) : null
      } */}
      {/* wordpress data ends  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h1> dasdasda </h1>
      <p>sad as</p>
    </main>
  );
}
