import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto carousel">
  <div id="item1" className="w-full carousel-item">
    <img src="https://i.ibb.co/FBqySZ3/dc-superheroes-ji-1600x900.jpg" className="w-full" />
  </div> 
  <div id="item2" className="w-full carousel-item">
    <img src="https://i.ibb.co/Y0YsR7t/batman-dark-4k-art-ip-1600x900.jpg" className="w-full" />
  </div> 
  <div id="item3" className="w-full carousel-item">
    <img src="https://i.ibb.co/Wsr7BxM/portgas-d-ace-bp-1600x900.jpg" className="w-full" />
  </div> 
  <div id="item4" className="w-full carousel-item">
    <img src="https://i.ibb.co/7KZ6PDf/moon-knight-5k-art-5i-1600x900.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;