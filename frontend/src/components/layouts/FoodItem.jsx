import React from 'react';
import { FaRupeeSign } from "react-icons/fa";

export default function FoodItem() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img 
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-1.jpg" 
                alt="Masala Dosa" 
                className="card-img-top mx-auto" 
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Masala Dosa</h5>
                <p className="fooditem_des">
                    The classic Masala dosa recipe is perfectly light, soft and crispy crepes stuffed with a savory, 
                    wonderfully spiced potato and onion filling.
                </p>
                <p className="card-text">
                    <FaRupeeSign /> 60
                    <br />
                </p>
                <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
                <br />
                <p>Status: 
                    <span id='stock_status' className={2>1 ? "greenColor" : "redColor"}>
                        {2>1 ? " In Stock" : " Out of Stock"}
                    </span>
                </p>
            </div>
        </div>
      </div>
    </>
  )
}
