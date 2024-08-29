import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getMenus } from "../../actions/menuAction";

import FoodItem from "./FoodItem";
import Loader from "./Loader";
import Message from "./Message";

export default function Menu() {
  const dispatch = useDispatch();

  // useParams() hook can be used to extract the
  // URL components like dynamic parameters from the route
  // http://localhost:3000/eats/stores/:restaurantId/menus
  // restaurantId is a dynamic parameter
  const { restaurantId } = useParams();

  const { loading, error, menus } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <FoodItem
                    key={fooditem._id}
                    fooditem={fooditem}
                    restaurant={restaurantId}
                  />
                ))}
              </div>
            ) : (
              <Message variant="info">Food Item not found</Message>
            )}
          </div>
        ))
      ) : (
        <Message variant="info">Menu not found</Message>
      )}
    </div>
  );
}
