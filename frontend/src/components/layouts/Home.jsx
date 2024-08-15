import React, { useEffect } from 'react';
import CountRestaurants from "./CountRestaurants";
import Restaurant from './Restaurant';
import Loader from './Loader';
import Message from './Message';
import { getRestaurants, sortByReviews, sortByRatings, toggleVegOnly } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  // useDispatch() hook returns a reference to the dispatch()
  // which can be used to dispatch any actions as needed
  const dispatch = useDispatch();

  const {
    loading: restaurantLoading, 
    error: restaurantError, 
    restaurants,
    showVegOnly,
  } = useSelector((state) => state.restaurants); 

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch]);


  const handleSortByReviews = () => {
    dispatch(sortByReviews());
  }

  const handleSortByRatings = () => {
    dispatch(sortByRatings());
  }

  const handleToggleVegOnly = () => {
    dispatch(toggleVegOnly());
  }


  return (
    <>
        <CountRestaurants />
        
        { 
          restaurantLoading ? (<Loader />) : (
            restaurantError ? <Message variant="danger">{restaurantError}</Message> : 
            <>
              <section>
                <div className="sort">
                    <button className="sort_veg p-3" onClick={handleToggleVegOnly}>
                      { showVegOnly ? "Show All" : "Pure Veg" }
                    </button>
                    <button className="sort_rev p-3" onClick={handleSortByReviews}>Sort by Reviews</button>
                    <button className="sort_rate p-3" onClick={handleSortByRatings}>Sort by Ratings</button>
                </div>
                <div className="row mt-4">
                    { restaurants ? (restaurants.map((restaurant) => 
                        (!showVegOnly || (showVegOnly && restaurant.isVeg)) ? (
                          <Restaurant key={restaurant._id} restaurant={restaurant} />
                        ) : null 
                      )) : (<Message variant="info">No Restaurant found </Message>)}
                </div>
              </section>
            </>
          )
        }        
    </>
  )
}
