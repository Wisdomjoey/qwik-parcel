import './Login.css';
import Logo from '../../../assets/images/logo1.png';
import { ArrowBack } from '@mui/icons-material/';
import { useMediaQuery } from 'react-responsive';

export default function Login() {

	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

  return (
    <div className="login">

        <div className="login__con">

			<form
				action=""
				method='post'
				style={{
					width: isMobile ? '90%' : isSmallScr && '75%',
					padding: isSmallScr && '1.5rem'
				}}
			>

				<h1
					style={{
						fontSize: isMobile && '23px'
					}}
				>Hey, Welcome Back</h1>
				<input
					type="email"
					name='email'
					placeholder='Username or Email'
					required
					style={{
						height: isMobile && '35px',
						fontSize: isMobile && '13px',
						width: isMobile && '85%'
					}}
				/>
				<input
					type="password"
					name='password'
					placeholder='Password'
					required
					style={{
						height: isMobile && '35px',
						fontSize: isMobile && '13px',
						width: isMobile && '85%'
					}}
				/>
				<div className="check">

					<input
						type="checkbox"
						name='remember'
						style={{
							height: isMobile && '35px'
						}}
					/>
					<p
						style={{
							fontSize: isMobile && '13px'
						}}
					>Remember me</p>

				</div>
				<input
					type="submit"
					name='submit'
					value='Login'
					style={{
						height: isMobile && '35px',
						fontSize: isMobile && '13px',
						width: isMobile && '70%'
					}}
				/>
				<p
					style={{
						fontSize: isMobile && '13px'
					}}
				>Not a User? <span>Sign Up</span></p>

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
