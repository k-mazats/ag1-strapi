import { useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

import { getCarousel } from '../../api/api';
import CarouselPanel from '../CarouselPanel/CarouselPanel';
import CarouselArrow from '../CarouselArrow/CarouselArrow';
import './CarouselSection.css'
// import './CarouselSection.css';

const CarouselSection = (props) => {
	const [data, setData] = useState();
	useEffect(() => {
		getCarousel(props.id)
			.then((res) => {
				setData(res);
				// console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [props.id]);
	// return <pre>{data ? JSON.stringify(data.Panels, null, 2) : null}</pre>;
	return (
		<>
			{data?.Panels ? (
				<Carousel
					swiping={true}
					responsive={true}
					useArrowKeys={true}
					show={data.visiblePanels}
					leftArrow={<CarouselArrow></CarouselArrow>}
					rightArrow={<CarouselArrow next={true}></CarouselArrow>}
					className="carousel"
				>
					{data.Panels.map((panel) => (
						<CarouselPanel {...panel} key={`panel_${panel.id}`}></CarouselPanel>
					))}
				</Carousel>
			) : null}
		</>
	);
};

export default CarouselSection;
