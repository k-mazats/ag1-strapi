import { Parallax } from 'react-parallax';
import './Hero.css';

const Hero = (props) => {
	return (
		<Parallax
			bgImage={`http://localhost:1337${props.background.url}`}
			bgSize="cover"
			strength={-200}
		>
			<header className="hero">
				<div className="hero__heading-wrapper">
          <h1 className="hero__heading--first">{props.title}</h1>
          <h2 className="hero__heading--second">{props.subtitle}</h2>
        </div>
			</header>
		</Parallax>
	);
};

export default Hero;
