import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantAction';

export default function CountRestaurants() {

  const dispatch = useDispatch();
  const { loading: countLoading, error: countError, count } = useSelector((state) => state.restaurants);

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
              {count} <span className="Restro">Restaurants</span>
            </p>
          )
        )
      }
      <hr />
    </div>
  )
}
