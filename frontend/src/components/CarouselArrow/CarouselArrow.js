import './CarouselArrow.css';
const CarouselArrow = (props) => {
	return (
		<div className="carousel__arrow-wrapper">
			<input
				type="image"
				src="./img/carousel-arrow.png"
				alt="Next"
				style={props.next ? { transform: 'rotate(180deg)' } : null}
				className="carousel__arrow"
			></input>
		</div>
	);
};

export default CarouselArrow;
