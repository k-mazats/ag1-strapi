import ReactMarkdown from 'react-markdown';
import './CarouselPanel.css';
const CarouselPanel = (props) => {
	const { title, textContent, picture, pictureLink } = props;
	// return <pre>{JSON.stringify(props, null, 2)}</pre>;
	return (
		<article className="carousel__panel">
			{title ? <h4 className="carousel__panel-title">{title}</h4> : null}
			{textContent ? (
				<ReactMarkdown
					className={
						picture
							? 'carousel__panel-text-content--half-width'
							: 'carousel__panel-text-content'
					}
				>
					{textContent}
				</ReactMarkdown>
			) : null}
			{picture && pictureLink ? (
				<a href={pictureLink} className="carousel__panel-img-wrapper">
					<img
						alt={picture.alternativeText}
						src={`http://localhost:1337${picture.url}`}
					/>
				</a>
			) : picture ? (
				<div className="carousel__panel-img-wrapper">
					<img
						alt={picture.alternativeText}
						src={`http://localhost:1337${picture.url}`}
					/>
				</div>
			) : null}
		</article>
	);
};

export default CarouselPanel;
