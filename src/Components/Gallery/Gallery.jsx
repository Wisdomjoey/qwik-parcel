import './Gallery.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import srcset from './Gallery.ts';
import gal1 from '../../images/bob export.jpg';
import gal2 from '../../images/0.jpg';
import gal3 from '../../images/CAP 2.PNG';
import gal4 from '../../images/7.jpg';
import gal5 from '../../images/4.jpg';
import gal6 from '../../images/8.jpg';
import gal7 from '../../images/6.jpg';
import gal8 from '../../images/5.jpg';
import gal9 from '../../images/CAPT 3.PNG';
import gal10 from '../../images/bob designss.jpg';
import gal11 from '../../images/bob designs (1).jpg';
import gal12 from '../../images/CAPT 4.PNG';
import gal13 from '../../images/2.jpg';
import gal14 from '../../images/CAPT 10.PNG';
import gal15 from '../../images/CAPT 1.PNG';
import gal16 from '../../images/bob confir.jpg';
import gal17 from '../../images/3.jpg';
import gal18 from '../../images/9.jpg';
import gal19 from '../../images/FLIER3.jpeg';
import gal20 from '../../images/CAPT 5.PNG';
import gal21 from '../../images/CAPT 9.PNG';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { CloseFullscreen } from '@mui/icons-material/';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const itemData = [
    {
      img: gal1,
      title: '1',
      rows: 2,
      cols: 2,
    },
    {
      img: gal2,
      title: '2',
    },
    {
      img: gal3,
      title: '3',
    },
    {
      img: gal4,
      title: '4',
      cols: 2,
    },
    {
      img: gal5,
      title: '5',
      rows: 2,
    },
    {
        img: gal8,
        title: '6',
        cols: 2
    },
    {
      img: gal6,
      title: '7',
    },
    {
        img: gal9,
        title: '8',
        cols: 2,
    },
    {
      img: gal7,
      title: '9',
    },
    {
      img: gal10,
      title: '10',
      rows: 2,
      cols: 2
    },
    {
      img: gal11,
      title: '11',
      rows: 2,
      cols: 2
    },
    {
      img: gal12,
      title: '12',
      cols: 2,
    },
    {
      img: gal13,
      title: '13',
      cols: 2,
    },
    {
      img: gal14,
      title: '14',
      cols: 2,
    },
    {
      img: gal15,
      title: '15',
    },
    {
      img: gal16,
      title: '16',
    },
    {
      img: gal17,
      title: '17',
      rows: 2,
    },
    {
      img: gal18,
      title: '18',
      rows: 2,
    },
    {
      img: gal19,
      title: '19',
      rows: 2,
      cols: 2,
    },
    {
      img: gal20,
      title: '20',
      cols: 2,
    },
    {
      img: gal21,
      title: '21',
      cols: 2,
    },
];

export default function Gallery() {

	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })
    const isLargeScr = useMediaQuery({
        query: '(min-width: 1025px)'
    })

    return (
		<div
			className="gallery"
			id="gallery"
			style={{
				padding: isSmallScr && 0,
				margin: isSmallScr && "8rem 0",
			}}
		>
			<h1 style={{ fontSize: isMobile && "28px" }}>Gallery</h1>
			<div
				className="profile__con"
				style={{
					flexDirection: isSmallScr && "column-reverse",
					gap: isSmallScr && "4rem",
				}}
			>
				<div
					className="gallery__con"
					onClick={() => {
						let fGall =
							document.getElementsByClassName("full__gallery");
						fGall[0].style.display = "flex";
					}}
					style={{
						height: isSmallScr && "50vh",
						flex: isLargeScr && 1,
					}}
				>
					<ImageList
						sx={{ width: "100%", height: "100%" }}
						variant="quilted"
						cols={4}
						rowHeight={isMobile ? 95 : 150}
						gap={5}
					>
						{itemData.map((item, ind) => (
							<ImageListItem
								key={ind}
								cols={item.cols || 1}
								rows={item.rows || 1}
								className={"imgs"}
							>
								<img
									{...srcset(
										item.img,
										150,
										item.rows,
										item.cols
									)}
									// src={ `${ item.img }?w=${ 150 * item.cols }&h=${ 150 * item.rows }&fit=crop&auto=format` }
									// srcSet={ `${ item.img }?w=${ 150 * item.cols }&h=${ 150 * item.rows }&fit=crop&auto=format&dpr=2 2x` }
									alt={item.title}
									loading="lazy"
									id={ind}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</div>
				<div className="ceo__profile" style={{ flex: isLargeScr && 1 }}>
					<h1 style={{ fontSize: isMobile && "23px" }}>CEO</h1>
					<div
						className="profile__pic"
						style={{
							width: isMobile ? "150px" : isTablet && "200px",
							height: isMobile ? "150px" : isTablet && "200px",
						}}
					></div>
					<div
						className="profile__info"
						style={{
							width: isMobile && "90%",
						}}
					>
						<cite style={{ fontSize: isMobile && "12px" }}>
							CEO of Boblink WorldWide Logistics, Obisesan Lukman
							Owolabi AKA (Bobby) is an exceptional young
							entrepreneur, whose unusual passion for
							excellence and quality service birthed the vision
							now known as Boblink Worldwide Logistics Limited in
							the year 2016.
						</cite>
					</div>
				</div>
			</div>
			<div className="full__gallery">
				<div
					className="gallery__ex"
					style={{
						width: isSmallScr && "100%",
						height: isSmallScr && "50vh",
					}}
				>
					<Swiper
						slidesPerView={1}
						modules={[Pagination, Navigation]}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						loop={true}
						className={"swiper__ex"}
					>
						{itemData.map((val, ind) => {
							return (
								<SwiperSlide
									key={ind}
									className={"swiper__slide"}
								>
									<div
										className="swiper__img"
										style={{
											backgroundImage: `url('${val.img}')`,
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
										}}
									></div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div
					className="close__btnx"
					onClick={() => {
						let fGall =
							document.getElementsByClassName("full__gallery");
						fGall[0].style.display = "none";
					}}
					title="Close Fullscreen"
				>
					<CloseFullscreen sx={{ color: "white" }} />
				</div>
			</div>
		</div>
	);
}