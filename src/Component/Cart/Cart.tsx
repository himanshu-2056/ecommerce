import React from "react";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity } from "../../actions/index";
import "./Cart.css";
import { Cart } from "../../reducers/index";

type Items = {
  Carts: Cart[];
};

type Inputs = {
  items: Items;
  IncreaseQuantity: Function;
  DecreaseQuantity: Function;
};

function CartComponent({ items, IncreaseQuantity, DecreaseQuantity }: Inputs) {
  let ListCart: CartComponent[] = [];
  let TotalCart = 0;
  items.Carts.forEach(function (item: CartComponent) {
    TotalCart += item.quantity * item.price;
    ListCart.push(item);
  });

  return (
    <div className="card-container">
      <h3>My Carts</h3>
      <div className="grid-container">
        {ListCart.map((data, i) => {
          return (
            <div className="card" key={i}>
              <div className="image-container">
                <img src={data.image} alt="image" />
              </div>
              <div className="content-container">
                <h6>{data.title.split(" ").slice(0, 3).join(" ")}</h6>
                <h5 className="text-info">Rs. {data.price}</h5>
                <p className="desc">
                  <span>
                    {data.description.split(" ").slice(0, 7).join(" ")}
                  </span>
                </p>
                <div className="quantity-container">
                  <button
                    className="quantity-button"
                    onClick={() => DecreaseQuantity(i)}
                  >
                    -
                  </button>
                  <span className="quantity">{data.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => IncreaseQuantity(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-checkout">Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity })(
  CartComponent
);
