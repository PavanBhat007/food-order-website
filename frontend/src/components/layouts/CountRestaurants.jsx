import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantAction';

export default function CountRestaurants() {

  const dispatch = useDispatch();
  const { loading: countLoading, error: countError, count, showVegOnly, pureVegRestaurantsCount } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants);
  }, [dispatch]);

  return (
    <div>
      { countLoading ? (
          <p> ... </p>
        ) : (
          countError ? (
            <p>error: {countError}</p>
          ) : (
            <p className="NumOfRestro">
              {showVegOnly ? pureVegRestaurantsCount : count} <span className="Restro">
                Restaurant{showVegOnly ? (pureVegRestaurantsCount > 1 ? "s": null) : (count > 1 ? "s" : null)}
              </span>
            </p>
          )
        )
      }
      <hr />
    </div>
  )
}
