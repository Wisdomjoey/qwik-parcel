import './Goods.css';
import Goods1 from '../../assets/images/pipes.jpg';
import Goods2 from '../../assets/images/tractor.jpg';
import Goods3 from '../../assets/images/Goods3.png';
import Goods4 from '../../assets/images/hos.png';
import Goods5 from '../../assets/images/Goods5.png';
import Goods6 from '../../assets/images/Goods6.png';
import Goods7 from '../../assets/images/Goods7.jpg';
import Goods8 from '../../assets/images/build.jpg';
import Goods9 from '../../assets/images/Goods9.png';
import Goods10 from '../../assets/images/industrial.jpg';
import Goods11 from '../../assets/images/Goods11.jpg';
import Goods12 from '../../assets/images/Goods12.jpg';
import Goods13 from '../../assets/images/Goods13.jpg';
import Goods14 from '../../assets/images/Goods14.jpg';
import Goods15 from '../../assets/images/Goods15.jpg';
import Goods16 from '../../assets/images/Goods16.jpg';
import Goods17 from '../../assets/images/Goods17.jpg';
import Goods18 from '../../assets/images/Goods18.jpg';
import Goods19 from '../../assets/images/Goods19.jpg';
import Goods20 from '../../assets/images/Goods20.jpg';
import Slide from './Slide/Slide';
import { useMediaQuery } from 'react-responsive';

const urls1 = [
    {
        url: Goods1,
        cap: 'Industrial Equipment'
    },
    {
        url: Goods2,
        cap: 'Farming Equipment'
    },
    {
        url: Goods3,
        cap: 'Home Appliances'
    },
    {
        url: Goods4,
        cap: 'Medical Equipment'
    },
    {
        url: Goods5,
        cap: 'Tabs $ Accessories'
    },
    {
        url: Goods6,
        cap: 'Phones $ Accessories'
    },
    {
        url: Goods7,
        cap: 'Laptops $ Accessories'
    },
    {
        url: Goods8,
        cap: 'Construction Equipment'
    },
    {
        url: Goods17,
        cap: 'Food Stuff'
    },
    {
        url: Goods18,
        cap: 'Hair & Products'
    },
]

const urls2 = [
    {
        url: Goods9,
        cap: 'Generators $ Accessories'
    },
    {
        url: Goods10,
        cap: 'Engineering Equipment'
    },
    {
        url: Goods11,
        cap: 'Clothes'
    },
    {
        url: Goods12,
        cap: 'Shoes'
    },
    {
        url: Goods13,
        cap: 'Gaming Equipment'
    },
    {
        url: Goods14,
        cap: 'Workout Equipment'
    },
    {
        url: Goods15,
        cap: 'Cars $ Accessories'
    },
    {
        url: Goods16,
        cap: 'Livestock'
    },
    {
        url: Goods19,
        cap: 'Beauty Products'
    },
    {
        url: Goods20,
        cap: 'Baby Foods'
    }
]

export default function Goods() {

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })

    return (
        <div
            className="goods"
            style={{
                margin: isMobile && '6rem 0'
            }}
        >

            <h1 style={{ fontSize: isMobile && '28px' }}>Some <span>Products</span> We Ship</h1>
            <div className="swiper__con" style={{ gap: isMobile && '0', fontSize: isMobile && '13px' }}>

                <Slide urls={ urls1 } dir='right' rd={ false } />
                <Slide urls={ urls2 } dir='left' rd={ true } />

            </div>
            <cite>And many more....</cite>

        </div>
    )
}
