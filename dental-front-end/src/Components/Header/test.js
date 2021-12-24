import React from 'react'

import OwlCarousel from 'react-owl-carousel';


const options = {
    items: 4, 
}
const test = () => {
    return (
        <div>    
                  <OwlCarousel margin={10} items={4} >
                      <div class="item"><h4>1</h4></div>
                      <div class="item"><h4>2</h4></div>
                      <div class="item"><h4>3</h4></div>
                      <div class="item"><h4>4</h4></div>
                      <div class="item"><h4>5</h4></div>
                      <div class="item"><h4>6</h4></div>
                  </OwlCarousel>
        </div>
    )
}

export default test 
