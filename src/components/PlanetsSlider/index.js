import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = ({planetsList}) => {
  console.log(planetsList)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-container ">
      <h1 className="main-head ">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings} className="">
          {planetsList.map(each => (
            <PlanetItem key={each.id}>{each}</PlanetItem>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
