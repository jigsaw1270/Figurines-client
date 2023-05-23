import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-full carousel">
  <div id="item1" className="w-full carousel-item">
    <img src="https://i.ibb.co/d4TnvXs/Website-banner-collectibles.webp" className="w-full" />
  </div> 
  <div id="item2" className="w-full carousel-item">
    <img src="https://i.ibb.co/XW5Bq1t/00e38b76-13bf-4e0a-916d-1911d9a130d9.jpg" className="w-full" />
  </div> 
  <div id="item3" className="w-full carousel-item">
    <img src="https://i.ibb.co/Qf59hGx/rare-wwe-action-figures-hero.webp" className="w-full" />
  </div> 
  <div id="item4" className="w-full carousel-item">
    <img src="https://i.ibb.co/sqSdRst/batman-action-figures-1674667439172.jpg" className="w-full" />
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