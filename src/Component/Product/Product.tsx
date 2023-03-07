import React, { Component } from "react";
import ADD_CART, { actFetchProductsRequest } from "../../actions/index";
import { connect } from "react-redux";
import TermsAndCondtion from "../Terms/TermsAndCondtion";
import "./product.css";

type ProductType = {
  _products: {
    image: string;
    title: string;
    price: number;
    description: string;
  }[];
};

type ProductProps = {
  actFetchProductsRequest: Function;
  AddCart: Function;
  _products: ProductType;
};

class Product extends Component<ProductProps> {
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;

    if (_products.length > 0) {
      return (
        <div className="container">
          <h1 className="page-title">
            Home Page Terms &amp; Conditions Dialog
          </h1>
          <div className=" product-container">
            {_products.map((el, i) => {
              return (
                <div className=" product" key={i}>
                  <div className="product-image-container">
                    <img src={el.image} alt="" className="product-image" />
                  </div>
                  <div className="product-details">
                    <h6 className="product-title">
                      {el.title.split(" ").slice(0, 3).join(" ")}
                    </h6>
                    <h5>Rs.{el.price}</h5>
                    <div className="product-description">
                      <p>{el.description.split(" ").slice(0, 7).join(" ")}</p>
                    </div>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => this.props.AddCart(el)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <TermsAndCondtion />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(ADD_CART(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
