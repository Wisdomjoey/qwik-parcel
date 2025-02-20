// import { useState } from 'react';
// import { Close, Send } from '@mui/icons-material';
import { useMediaQuery } from "react-responsive";
// import Navbar from '../Navbar/Navbar';
import CarouselT from "./CarouselT/CarouselT";
import "./Header.css";
import { useRouter } from "next/navigation";
// import { useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  // const [sub, setsub] = useState(false);
  // const [val, setval] = useState('');
  // const [err, seterr] = useState('');

  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 480px)",
  // });

  // const handleCls = () => {
  //     setsub(prev => !prev);
  // }

  // const handleSubmit = () => {
  //     const input = document.getElementById('input');
  //     const inputS = String(input.value);

  //     if (input.value === '') {
  //         seterr('Please fill in with your email address');
  //     } else if (inputS.includes('@') && inputS.includes('.com') && !inputS.includes('@.')) {
  //         seterr('Subscription successful');
  //         setsub(prev => !prev);
  //     } else {
  //         seterr('Invalid email address');
  //     }
  // }
  // const handleInput = (e) => {
  //     setval(e.target.value);
  // }

  // useEffect(() => {
  //     setTimeout(() => {
  //         setsub(true);
  //     }, 10000)
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const id = form.get("number");

    if (!id || id === "") return;

    router.push(`/tracking?id=${id}`);
  };

  return (
    <div className="header">
      {/* <Navbar /> */}
      {/* { sub && 
                (<div className='subscribe'>

                    { err !== '' && (
                        <div
                            className="err__con"
                            style={{
                                width: isTablet && '90%',
                            }}
                        >
                            <p>{ err }</p>
                        </div>
                    ) }
                    <div
                        className="subscribe__con"
                        style={{
                            width: isTablet && '90%',
                            padding: isTablet && '20px 0'
                        }}
                    >

                        <h1
                            style={{
                                fontSize: isTablet && '30px'
                            }}
                        >Subscribe</h1>
                        <div
                            className="input__con"
                            style={{
                                width: isTablet && '90%'
                            }}
                        >

                            <input id='input' type="email" value={ val } onChange={ (e) => handleInput(e) } placeholder='youremail@gmail.com' />
                            <div className='send__btn' onClick={ () => handleSubmit() }>
                                <Send sx={{ color: 'rgb(var(--primary-color))' }} style={{ cursor: 'pointer' }} />
                            </div>

                        </div>
                        <p
                            style={{
                                width: isTablet && '89%',
                                textAlign: 'center'
                            }}
                        >If you wish to recieve news & updates from Boblink WorldWide Logistics, please enter your email address above</p>
                        <div className='cls__btn' onClick={ () => handleCls() }>
                            <Close style={{ cursor: 'pointer' }} />
                        </div>

                    </div>

                </div>)
            } */}
      <div
        className="top__header"
        style={{
          minHeight: isTablet ? "50rem" : "auto",
        }}
      >
        <div className="top">
          <div className="carousel__con">
            <CarouselT />
          </div>
        </div>
      </div>

      <div
        className="tracking__component"
        style={{
          alignItems: isTablet ? "flex-end" : "center",
          justifyContent: isTablet ? "center" : "flex-end",
        }}
      >
        <div
          className="tracking"
          style={{ flexBasis: isTablet ? "60%" : "45%" }}
        >
          <form action="" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="number"
              placeholder="Enter Tracking ID..."
            />

            <input type="submit" name="commit" value="Track" />
          </form>
        </div>
      </div>
    </div>
  );
}
