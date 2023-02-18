import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import img1 from'../assets/img/meter1.svg'
import img2 from'../../src/assets/img/meter2.svg'
import img3 from'../../src/assets/img/meter3.svg'

export default class CruosalItems extends Component {
  state = {
     breakPoints : [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]
  }

  render () {
    const { breakPoints } = this.state;
    return ( 
      <div className="carosal">
        <Carousel breakPoints={breakPoints}>
          <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
        
      </Carousel>
      </div>
    )
  }
}
