import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // Create a separate CSS file for Testimonials component

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      feedback: "The burgers here are simply mind-blowing! Juicy, flavorful, and packed with fresh ingredients. My taste buds have found their true love!",
      author: "Sarah H."
    },
    {
      id: 2,
      feedback: "I've tried pizzas from different places, but nothing compares to the heavenly taste of their Margherita pizza. It's pure bliss!",
      author: "Emily L."
    },
    {
      id: 3,
      feedback: "I always have a great experience here. The staff is welcoming, and the food is consistently delicious. My fast food cravings are always satisfied!",
      author: "Mark T."
    },
    {
      id: 4,
      feedback: "Their specialty pizzas are a game-changer! The BBQ Chicken Pizza with a drizzle of their secret sauce is beyond words. A must-try!",
      author: "Jason M."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials">
      <h2 className='feedback'><i>Feedback from our satisfied users!💖</i></h2>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="feedback-text">{testimonial.feedback}</p>
              <span className="author">{testimonial.author}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
