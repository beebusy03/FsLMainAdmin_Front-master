const [slideIndex, setSlideIndex] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    plusSlides(1);
  }, 5000);

  return () => {
    clearInterval(interval);
  };
}, [slideIndex]);

const slides = document.getElementsByClassName("slide");
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
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[newIndex - 1].style.display = "block";
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
