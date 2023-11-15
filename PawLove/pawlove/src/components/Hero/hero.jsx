/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./hero.css";

function HeroSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	const slides = [
		{
			img: "https://res.cloudinary.com/dchzjr4bz/image/upload/v1700034093/wren-meinberg-AL2-t0GrSko-unsplash_1_hl5wzp.jpg",
			title: "Don't let them stray, Let us Help them",
			text: "Paw Love Cares about them",
		},
		{
			img: "https://res.cloudinary.com/dchzjr4bz/image/upload/v1700034612/cat-mapper-max-ogden-EcsCeS6haJ8-unsplash_uw0xa6.jpg",
			title: "Many Kittens Die due to Road Accidents",
			text: "Paw Love Helps Disabled cats",
		},
		{
			img: "https://res.cloudinary.com/dchzjr4bz/image/upload/v1700034612/emre-153_VPk1NZQ-unsplash_jmmkr9.jpg",
			title: "Let's Share our Love for Cat-Paws",
			text: "Paw Love Has Started",
      isLast: true,
    }
	];

	const nextSlide = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [slides.length, nextSlide]);

	return (
		<div id="carouselExample" className="carousel slide">
			<div className="carousel-inner">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`carousel-item ${index === activeIndex ? "active" : ""}`}
					>
						<img
							src={slide.img}
							className="d-block w-100"
							alt={`Slide ${index}`}
						/>
						<div className="carousel-caption">
							<h1>{slide.title}</h1>
							<p>{slide.text}</p>
              {slide.isLast && (
                                <a href="#" className="btn btn-primary pt-1 pb-1">Join Paw Love Network</a> // CTA button for the last slide
                            )}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HeroSection;
