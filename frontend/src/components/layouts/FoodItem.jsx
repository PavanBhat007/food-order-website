import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartAction";

export default function FoodItem({ fooditem, restaurant }) {
  const [quantity, setQuantity] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const cartItem = cartItems.find(
      (item) => item.foodItem._id === fooditem._id
    );
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowButtons(true);
    } else {
      setQuantity(1);
      setShowButtons(false);
    }
  }, [cartItems, fooditem]);

  const increaseQty = () => {
    if (quantity < fooditem.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      alert.error("Exceeded stock limit!");
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      // quantity = 1 and decrease => remove item from cart
      setQuantity(0);
      setShowButtons(false);
      dispatch(removeItemFromCart(fooditem._id, alert));
      alert.success(`Successfully removed item ${fooditem.name} from cart.`);
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) return navigate("/users/login");
    if (fooditem && fooditem._id) {
      dispatch(addItemToCart(fooditem._id, restaurant, quantity, alert));
      setShowButtons(true);
    } else alert.error("Error finding food item");
  };

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
          <img
            src={fooditem.images[0].url}
            alt={fooditem.name}
            className="card-img-top mx-auto"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{fooditem.name}</h5>
            <p className="fooditem_des">{fooditem.description}</p>
            <p className="card-text">
              <FaRupeeSign /> {fooditem.price}
              <br />
            </p>
            {!showButtons ? (
              <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4"
                disabled={fooditem.stock === 0}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>
                  -
                </span>
                <input
                  type="number"
                  className="form-control count d-inline"
                  value={quantity}
                  readOnly
                />
                <span className="btn btn-primary plus" onClick={increaseQty}>
                  +
                </span>
              </div>
            )}
            <br />
            <p>
              Status:
              <span
                id="stock_status"
                className={fooditem.stock > 0 ? "greenColor" : "redColor"}
              >
                {fooditem.stock > 0 ? " In Stock" : " Out of Stock"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
