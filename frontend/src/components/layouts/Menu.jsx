import React from 'react'
import FoodItem from './FoodItem'

export default function Menu() {
  return (
    <>
        <div>
            <h2>South Indian</h2>
            <hr />

            <div className="row">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>

            <h2>Chaats</h2>
            <hr />

            <div className="row">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        </div>
    </>
  )
}
