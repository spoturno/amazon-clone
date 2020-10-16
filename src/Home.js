import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={5491584179}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
          <Product
            id={3613889530}
            title="Clean Code: A Handbook of Agile Software Craftsmanship"
            price={35.5}
            image="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={1672912389}
            title="The Power of Now: A Guide to Spiritual Enlightenment"
            price={10.52}
            image="https://imgv2-2-f.scribdassets.com/img/word_document/153949999/original/c1e50ae866/1599286263?v=1"
            rating={5}
          />
          <Product
            id={1806096409}
            title="Emotional Intelligence: Why It Can Matter More Than IQ"
            price={14}
            image="https://images-na.ssl-images-amazon.com/images/I/81boBok4oJL.jpg"
            rating={5}
          />
          <Product
            id={3689725381}
            title="A Brief History of Time"
            price={14.22}
            image="https://images-na.ssl-images-amazon.com/images/I/51O0YgvNBpL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={9861255667}
            title="Harry Potter Paperback Box Set (Books 1-7)"
            price={55.99}
            image="https://prodimage.images-bn.com/pimages/9780545162074_p0_v2_s1200x630.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
