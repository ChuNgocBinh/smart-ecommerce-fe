import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const imgs = [
  {
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/1d30522e76422f1e1efa08881b4ccc0e.png.webp",
    alt: 'image_1'
  },
  {
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/15/6c/11/5f39e6003bc6e3762b600ef64a1796ad.png.webp",
    alt: 'image_2'
  },
  {
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/08/70/dc/632e406051109081542fafa392473226.png.webp",
    alt: 'image_3'
  },
  {
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/4b/2a/3a/8a2f0b627163c559e1ea1213a32769b6.png.webp",
    alt: 'image_4'
  },
  {
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/dd/2c/10/38b0cb334df6185d187f528a53e935e9.png.webp",
    alt: 'image_5'
  },
]

const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="eventSlider">
      <Slider {...settings}>
        {
          imgs.map(el => (
            <div className="eventSlider-item" key={el.alt}>
              <img src={el.src} alt={el.alt}></img>
            </div>
          ))
        }
      </Slider>
    </div>
  );

}

export default EventSlider