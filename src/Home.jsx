import React, { useState, useEffect } from 'react';
import "../src/css/slider.css";
import Header from './common/header';
import Footer from './common/footer';
import logo from '../src/assets/images/dashboard2-ASDCRecovered.jpg'
import dashboard2 from './assets/images/sabkasath.jpg'
import sabkasath from './assets/images/sabkasath.jpg'
import { faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import { RiFileCloseFill } from 'react-icons/ri';
import { FaHandHoldingMedical, FaFileContract } from 'react-icons/fa';
import Features from './Features';
import state from "../src/assets/images/indiamap.png"
import offices from "../src/assets/images/offices.png"
import invoice from "../src/assets/images/invoice.png"
import UserDashboard from './user/UserDashboard';
const Home = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    logo, sabkasath, dashboard2,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  const slidess = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  const showSlides = (n) => {
    let newIndex = n;

    if (newIndex > slides.length) {
      newIndex = 1;
    }

    if (newIndex < 1) {
      newIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slidess[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark its corresponding dot as active
    slidess[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);
  const userid = localStorage.getItem('username');
  const apicert = `${process.env.REACT_APP_API_PREFIX}/user/dashboardcounter/getdashboardcounter/${userid}`;

  useEffect(() => {

    $(this).prop('Counter', 0).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );

  }, [userid]);
  return (
    <>
      <Header />
      <div className='container'>
        <div className="slider-container">
          {slides.map((imageUrl, index) => (
            <div key={index} className={`slide ${index === slideIndex ? 'fade' : ''}`}>
              <img className="slide-image" src={imageUrl} alt={`Slide ${index + 1}`} />
              <div className="slide-content">{/* Your slide content here */}</div>
              <div className="slide-number-container">
                {/* Add your slide number content here */}
              </div>
            </div>
          ))}

          <div className="slider-nav">
            <a className="slider-nav-btn" onClick={prevSlide}>
              <ion-icon name="caret-back-outline"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /></ion-icon>

            </a>
            <a className="slider-nav-btn" onClick={nextSlide}>
              <ion-icon name="caret-forward-outline"><FontAwesomeIcon icon={faArrowAltCircleRight} /></ion-icon>
            </a>
          </div>

          <div className="dot-container">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === slideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <Features />
      <div className='container'>
        <div className=' mt-4'>
          <h2>Highlights</h2>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="counter blue">

              <div className="counter-icon">
                <img src={state} className=" i" alt="" />
              </div>
              <div className="counter-content">
                <h4>States & UT Covered</h4>
                <span className="counter-value" id="Receipt"></span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="counter gray">
              <div className="counter-icon">
                <img src={offices} className=" i" alt="" style={{ width: "50px" }} />
              </div>
              <div className="counter-content">
                <h4>Offices Covered</h4>
                <span className="counter-value" id="Report"></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="counter  ">
              <div className="counter-icon">
                <img src={invoice} className=" i" alt="" style={{ width: "60px" }} />
              </div>
              <div className="counter-content">
                <h4> Total Receipt</h4>
                <span className="counter-value" id="Despatch"></span>
              </div>
            </div>
          </div>
          <div className='row mt-3'>

          </div></div>
      </div>
      <Footer />
    </>
  );
};
export default Home
