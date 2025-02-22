import './Signup.css';
import Logo from '../../../assets/images/logo1.png';
import { ArrowBack } from '@mui/icons-material/';
import { useMediaQuery } from 'react-responsive';

export default function Signup() {

	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

  return (
    <div className="signup">

        <div className="signup__con">

			<form
				action=""
				method='post'
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
				>Hello, Welcome</h1>
                <div
					className="user__name"
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				>

                    <input
						type="text" name='fName'
						placeholder='First Name'
						required
						style={{
							height: isMobile && '32px',
							fontSize: isMobile && '11px'
						}}
						/>
                    <input
						type="text" name='lName'
						placeholder='Last Name'
						required
						style={{
							height: isMobile && '32px',
							fontSize: isMobile && '11px'
						}}
						/>

                </div>
				<input
					type="text"
					name='username'
					placeholder='Username'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
				<input
					type="email"
					name='email'
					placeholder='Email'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
				<input
					type="password"
					name='password'
					placeholder='Password'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
				<input
					type="password"
					name='cPassword'
					placeholder='Confirm Password'
					required
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '85%'
					}}
				/>
                <div
					className="check"
					style={{
						width: isMobile && '85%'
					}}
					>

					<input type="checkbox" name='update' required />
					<p
						style={{
							fontSize: isMobile && '11px'
						}}
					>Yes, I want to recieve update notification emails</p>

				</div>
                <div
					className="check"
					style={{
						width: isMobile && '85%'
					}}
					>

					<input type="checkbox" name='policy' required />
					<p
						style={{
							fontSize: isMobile && '11px'
						}}
					>I agree to all Qwik Parcel's policy</p>

				</div>
				<input
					type="submit"
					name='submit'
					value='Sign Up'
					style={{
						height: isMobile && '32px',
						fontSize: isMobile && '11px',
						width: isMobile && '70%'
					}}
				/>
				<p
						style={{
							fontSize: isMobile && '11px'
						}}
					>Already a User? <span>Sign In</span></p>

			</form>
			<div className="back__home">

				<ArrowBack sx={{ fontSize: isMobile ? 30 : 35 }} />

			</div>
			<div className="logo">

				<img
					src={ Logo.src }
					alt=""
					style={{
						width: isMobile && '70px'
					}}
				/>

			</div>

		</div>

    </div>
  )
}