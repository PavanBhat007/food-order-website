import React, { useEffect } from 'react';
import CountRestaurants from "./CountRestaurants";
import Restaurant from './Restaurant';
import Loader from './Loader';
import Message from './Message';
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // useDispatch() hook returns a reference to the dispatch()
  // which can be used to dispatch any actions as needed
  const dispatch = useDispatch();

  const {
    loading: restaurantLoading, 
    error: restaurantError, 
    restaurants
  } = useSelector((state) => state.restaurants); 

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch]);

  return (
    <>
        <CountRestaurants />
        
        { 
          restaurantLoading ? (<Loader />) : (
            restaurantError ? <Message variant="danger">{restaurantError}</Message> : 
            <>
              <section>
                <div className="sort">
                    <button className="sort_veg p-3">Pure Veg</button>
                    <button className="sort_rev p-3">Sort by Reviews</button>
                    <button className="sort_rate p-3">Sort by Ratings</button>
                </div>
                <div className="row mt-4">
                    { restaurants ? restaurants.map((restaurant) => (
                      <Restaurant key={restaurant._id} restaurant={restaurant} />
                    )) : null}
                </div>
              </section>
            </>
          )
        }        
    </>
  )
}
