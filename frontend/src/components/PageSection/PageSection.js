import { Parallax } from 'react-parallax';

import CarouselSection from '../CarouselSection/CarouselSection';
import TextSection from '../TextSection/TextSection';

import './PageSection.css';

const PageSection = (props) => {
	return (
		<section
			className="section"
			id={
				props?.carousel
					? props.carousel.name.split(' ').join('_')
					: props.simple_text.name.split(' ').join('_')
			}
		>
			<div className="section__header">
				<h3>
					{props?.carousel ? props.carousel.name : props.simple_text.name}
				</h3>
			</div>
			<Parallax
				bgImage={`http://localhost:1337${
					props?.carousel
						? props.carousel.background.url
						: props.simple_text.background.url
				}`}
				bgSize="cover"
				strength={-200}
			>
				<div className="section__content">
					{props?.carousel ? (
						<CarouselSection {...props.carousel}></CarouselSection>
					) : (
						<TextSection {...props.simple_text}></TextSection>
					)}
				</div>
			</Parallax>
		</section>
	);
};

export default PageSection;
