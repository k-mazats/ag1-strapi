import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
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
          <Link to="/">
						<h1 className="hero__heading--first">{props.title}</h1>
						<h2 className="hero__heading--second">{props.subtitle}</h2>
					</Link>
        </div>
			</header>
		</Parallax>
	);
};

export default Hero;
