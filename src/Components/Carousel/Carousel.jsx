import './Carousel.css';
// import img1 from '../../images/signupbg.jpg';
import img2 from "../../images/haulage.jpg";
import img3 from "../../images/hero_ground.jpg";
import img4 from "../../images/hero_ship.jpg";
import img5 from "../../images/home1-rev-1.jpg";
import img6 from "../../images/loginbg.jpg";
import img7 from "../../images/ship.jpg";
import img8 from "../../images/land.jpg";
import img9 from "../../images/services-bg-1.jpg";
import img10 from "../../images/freight_shipping.jpg";
import { useEffect } from 'react';

export default function Carousel() {

    let currentS = 0;

    function change(e) {

        const spa1 = document.querySelector(".pag.active");
        const sl1 = document.querySelector(".slide.active");
        const sl = document.querySelectorAll(".slide");

        if (e.target.className === 'pag active') {
            return;
            // console.log(e)
        } else {
            currentS = e.target.id;
            e.target.classList.add('active');
            sl[currentS].classList.add('active');
            spa1.classList.remove('active');
            sl1.classList.remove('active');
        }
    }

    useEffect(() => {
		const sl = document.querySelectorAll(".slide");
		const spa = document.querySelectorAll(".pag");
        setInterval(() => {
            const spa1 = document.querySelector(".pag.active");
			const sl1 = document.querySelector(".slide.active");
            sl[currentS].classList.add("active");
            spa[currentS].classList.add("active");
			sl1.classList.remove("active");
			spa1.classList.remove("active");
            console.log(console.log(currentS));
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentS += 1;
            if (currentS === 10) {
                currentS = 0;
            }
        }, 5000);

        // return clearInterval(sta);
    }, []);

    return (
        <div className="carousel">

            <div className="carousel__con">

                <div
                    className="slide active"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/F581y5N/signupbg.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/n7tDX6Y/haulage.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/9sLV3rd/hero-ground.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/f0wcZjf/hero-ship.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/TBYSmpP/home1-rev-1.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/Tb7nxxb/loginbg.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/NV6L58t/ship.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(${ img8 })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(${ img9 })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(${ img10 })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

            </div>
            <div className="pagination">

                <span id='0' onClick={ change } className="pag active"></span>
                <span id='1' onClick={ change } className="pag"></span>
                <span id='2' onClick={ change } className="pag"></span>
                <span id='3' onClick={ change } className="pag"></span>
                <span id='4' onClick={ change } className="pag"></span>
                <span id='5' onClick={ change } className="pag"></span>
                <span id='6' onClick={ change } className="pag"></span>
                <span id='7' onClick={ change } className="pag"></span>
                <span id='8' onClick={ change } className="pag"></span>
                <span id='9' onClick={ change } className="pag"></span>

            </div>

        </div>
    )
}
