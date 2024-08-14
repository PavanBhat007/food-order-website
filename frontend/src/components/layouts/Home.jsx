import React from 'react';
import CountRestaurants from "./CountRestaurants";
import Restaurant from './Restaurant';

export default function Home() {
  return (
    <>
        <CountRestaurants />
        <section>
            <div className="sort">
                <button className="sort_veg p-3">Pure Veg</button>
                <button className="sort_rev p-3">Sort by Reviews</button>
                <button className="sort_rate p-3">Sort by Ratings</button>
            </div>
            <div className="row mt-4">
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </div>
        </section>
        
    </>
  )
}
