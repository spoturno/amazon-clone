import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Chechout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <CheckoutProduct
            id="15434"
            title="this is a test awsf wgfw wef wgf we wegwerfwegf wfgwgfewrtert ert ewt erwterwt"
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            price={21.3}
            rating={4}
          />
          <CheckoutProduct
            id="15434"
            title="this is a test asdfsadfsdaf saf sadf sfd sdafsadf sadf sadf sadf dsfwefr wgasfd sadf w wgwqgsadf wg wqerg"
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            price={21.3}
            rating={4}
          />

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
        </div>
      </div>

      <div className=" ">
        <Subtotal />
      </div>
    </div>
  );
}

export default Chechout;
