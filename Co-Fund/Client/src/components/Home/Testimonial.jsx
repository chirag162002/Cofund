import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Reusable Card component
const Card = ({ testimonial }) => (
  <div className="card p-5 mb-4 bg-slate-100 w-80 rounded-xl">
    <div className="top flex">
      <img className='w-16 h-16 rounded-full bg-slate-300' src={testimonial.image} alt={testimonial.name} />
      <div className="name m-2">
        <p className='text-base font-bold'>{testimonial.name}</p>
        <p className='text-ms text-gray-500'>{testimonial.company}</p>
      </div>
    </div>
    <div className="bottom mt-6">
      <p>{testimonial.comment}</p>
    </div>
  </div>
);

function Testimonial() {
  // Testimonial data
  const testimonials = [
    {
      name: 'John Doe',
      company: 'Company @ Google',
      image: 'https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis odio nostrum illo debitis! Id eligendi dolore sapiente dicta vero.',
    },
    {
      name: 'Jane Doe',
      company: 'Company @ Facebook',
      image: 'https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis odio nostrum illo debitis! Id eligendi dolore sapiente dicta vero.',
    },
    {
      name: 'Jane Doe',
      company: 'Company @ Facebook',
      image: 'https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis odio nostrum illo debitis! Id eligendi dolore sapiente dicta vero.',
    },
    {
      name: 'Jane Doe',
      company: 'Company @ Facebook',
      image: 'https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis odio nostrum illo debitis! Id eligendi dolore sapiente dicta vero.',
    },
    {
      name: 'Jane Doe',
      company: 'Company @ Facebook',
      image: 'https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis odio nostrum illo debitis! Id eligendi dolore sapiente dicta vero.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Display two cards at a time on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display one card at a time on mobile devices
        },
      },
    ],
  };

  const line = {
    content: "",
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "170px",
    height: "4px",
    backgroundColor: "red"
  };
  

  return (
    <div className='mx-8 my-12 lg:mx-32 lg:my-24'>
      <div className="testimonials-heading relative my-10">
        <p className='text-3xl font-semibold inline-block my-2 relative z-10'>Testimonial</p>
        <div className=" absolute inset-x-0 bottom-0 h-1 bg-red-500" style={line}></div>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='flex justify-center'>
            <Card testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
