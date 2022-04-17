import React from 'react';


export default function BannerImg(props){

  const bannerList = props.bannerList;

  let banner_items = bannerList.map((banner_item, index) => {
    
      if (index == 0) {
        return( <div key={banner_item} className="carousel-item active">
      <img src={banner_item} className="d-block w-100" alt="..." />
    </div>)
      }

      return (
        <div key={banner_item} className="carousel-item">
      <img src={banner_item} className="d-block w-100" alt="..." />
    </div>
      )
      
    
  })

  
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div> */}
  <div className="carousel-inner">
  {banner_items}
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}