import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {getFooter } from '../../api/api';

const Footer = () => {
	const [footerData, setFooterData] = useState();
	useEffect(() => {
		getFooter()
			.then((res) => {
				setFooterData(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	return (
		<footer>
			{footerData ? (
				<ul>
					{footerData.footerLinks.map((link) => {
						return (
							<li key={`footer-link-${link.id}`}>
								<a href={link.link}>
									<span>
										{link?.icon ? <i className={link.icon}></i> : null}
									</span>
									<span>{link.name}</span>
								</a>
							</li>
						);
					})}
				</ul>
			) : null}

			<ul>
				<li>
					<Link to="/privacy">Privacy</Link>
				</li>
				<li>
					<Link to="/legals">Legals</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
