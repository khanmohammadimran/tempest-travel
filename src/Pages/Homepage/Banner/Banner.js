import React, { useState } from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='display-1 title-text'>Adventure Awaits, Go Find It.</h1>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='display-1 title-text'>Allow me to guide <br /> you</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='display-1 title-text'>Book A Ticket and Just Leave.</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;