import './Contact.css';
import Logo from '../../images/logo1.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useAlert } from 'react-alert';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Contact() {

  	const [state, setstate] = useState({
		user_name: '',
		user_email: '',
		user_phone: '',
		message: '',
		processing: false
	});
	const { user_name, user_email, user_phone, message, processing } = state;
	// const alert = useAlert()
	const form = useRef();
	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

	const sendEmail = (e) => {
		e.preventDefault();
		setstate({
			...state,
			processing: true
		});

		emailjs.sendForm('service_hashira', 'template_jf4ecxi', form.current, '6kdC8lootDkSwmT-M')
		.then((result) => {
			console.log('Success', result.status, result.text);
			alert.show('Message Sent Successfully', {
				timeout: 10000, // custom timeout just for this one alert
  				type: 'success'
			});
			setstate({
				user_name: '',
				user_email: '',
				user_phone: '',
				message: '',
				processing: false
			});
		}, (error) => {
			console.log(error.text);
			alert.show(`An error occurred, ${ error.text }`, {
				timeout: 10000, // custom timeout just for this one alert
  				type: 'error'
			});
			setstate({
				...state,
				processing: false
			})
		});
		emailjs.sendForm('service_1447jtt', 'template_jf4ecxi', form.current, '6kdC8lootDkSwmT-M')
	};

    document.title = 'Boblink Logistics | Contact';

  return (
    <div className="contact">

        <div className="contact__con">

			<form
				ref={ form }
				onSubmit={ sendEmail }
				style={{
					width: isMobile ? '90%' : isSmallScr && '65%',
					padding: isSmallScr && '1.5rem',
					gap: isMobile && '.7rem'
				}}
			>

				<h1
					style={{
						fontSize: isMobile && '23px'
					}}
				>Welcome to Support</h1>
                <input
					name='to_email'
					value='boblinkworldwidelogistics1@gmail.com'
                    style={{
                        display: 'none'
                    }}
                />
                <input
                    type="text"
					name='user_name'
					onChange={ (e) => { setstate({ ...state, [e.target.name]: e.target.value }) } }
					value={ user_name }
                    placeholder='Full Name'
                    required
                    style={{
                        height: isMobile && '32px',
                        fontSize: isMobile && '11px',
						width: isMobile && '85%'
                    }}
                />
				<input
					type="email"
					name='user_email'
					onChange={ (e) => { setstate({ ...state, [e.target.name]: e.target.value }) } }
					value={ user_email }
					placeholder='Email'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
				<input
					type="tel"
					name='user_phone'
					onChange={ (e) => { setstate({ ...state, [e.target.name]: e.target.value }) } }
					value={ user_phone }
					placeholder='Phone Number'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
                <textarea
					name="message"
					onChange={ (e) => { setstate({ ...state, [e.target.name]: e.target.value }) } }
					value={ message }
					rows="5"
					placeholder='Message'
					style={{
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				></textarea>
				{/* <input
					type="submit"
					name='submit'
					value='Submit'
					required
					disabled='disabled'
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '70%'
					}}
				/> */}
				<Button
					variant="contained"
					type='submit'
					disabled={ processing }
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '70%'
					}}
					className='contactbb'
				>Submit</Button>

			</form>
			<Link to='/'>

				<div className="logo">

					<img
						src={Logo}
						alt=""
						style={{
							width: isMobile && '70px'
						}}
					/>

				</div>

			</Link>

		</div>

    </div>
  )
}