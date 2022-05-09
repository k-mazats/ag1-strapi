import ReactMarkdown from 'react-markdown';

// import './TextSection.css';

const TextSection = (props) => {
	return (
		<article>
			<ReactMarkdown components={{h1: 'h5', h2: 'h5', h3: 'h5', h4: 'h6', h5: 'h6'}}>{props.textContent}</ReactMarkdown>
		</article>
	);
};

export default TextSection;
