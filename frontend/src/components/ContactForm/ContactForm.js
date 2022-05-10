import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Parallax } from 'react-parallax';
import { sendMail } from '../../api/api';
import './ContactForm.css';
const schema = Nope.object().shape({
	name: Nope.string().required(),
	mail: Nope.string().email().required(),
	message: Nope.string().required(),
});
const ContactForm = (props) => {
	const [token, setToken] = useState('');
	const captchaRef = useRef(null);
	const formRef = useRef(null);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: nopeResolver(schema),
	});
	const onVerifyCaptcha = (token) => {
		setToken(token);
	};
	const submitForm = async (form) => {
		if (token !== '') {
			const data = { ...form, token };
			await sendMail(data);
			captchaRef.current.resetCaptcha();
			formRef.current.reset();
		}
	};
	return (
		<section className="section">
			<div className="section__header">Nous contacter</div>
			<Parallax
				bgImage={`http://localhost:1337${props.background.url}`}
				bgSize="cover"
				strength={-200}
			>
				<div className="section__content">
					<form
						className="contact"
						onSubmit={handleSubmit((d) => submitForm(d))}
						ref={formRef}
						formNoValidate
					>
						<label className="contact__name-label">
							Nom :
							<input type="text" {...register('name')} />
							{errors.name && <div>x</div>}
						</label>
						<label className="contact__mail-label">
							Adresse mail :
							<input type="mail" {...register('mail')} />
							{errors.mail && <div>x</div>}
						</label>
						<label className="contact__message-label">
							Message :<textarea {...register('message')}></textarea>
							{errors.message && <div>x</div>}
						</label>
						<HCaptcha
							sitekey={process.env.REACT_APP_HCAPTCHA}
							onVerify={onVerifyCaptcha}
							ref={captchaRef}
						/>
						<button>Envoyer</button>
					</form>
				</div>
			</Parallax>
		</section>
	);
};

export default ContactForm;
