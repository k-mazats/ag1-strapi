import { useState } from 'react';
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
	const [token,setToken] = useState('');
	 const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm({
			resolver: nopeResolver(schema),
		});
		const onVerifyCaptcha = (token) => {
			setToken(token);
		}
		const submitForm = async (form) => {
			const data = {...form,token}
			await sendMail(data)
		}
		const token = await executeRecaptcha('yourAction');
		return token;
	}, [executeRecaptcha]);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: nopeResolver(schema),
	});

	const submitForm = async (form) => {
		const token = await handleVerifyRecaptcha();
		const data = { ...form, token };
		await sendMail(data);
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
						/>
						<button>Envoyer</button>
					</form>
				</div>
			</Parallax>
		</section>
	);
};

export default ContactForm;
