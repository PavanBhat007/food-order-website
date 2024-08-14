import React from 'react'

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qy3Mhovq110qA7Yr9HXBawHaFj%26pid%3DApi&f=1&ipt=cac915c02f4e18d9641fc5144b858cc7f2075c9171faa7f3521094fc625f4e9f&ipo=images" 
                alt="Vidhyarthi Bhavan" 
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Vidhyarthi Bhavan</h5>
                <p className="rest_address">No 32, Gandhi Bazar Main Road, Near Gandhi Bazaar Circle, Bengaluru, IN 560004</p>
            </div>
            <div className="rating-outer">
                <div className="rating-inner"></div>
                <span id="no_of_reviews">(891 Reviews)</span>
            </div>
        </div>
    </div>
  )
}
