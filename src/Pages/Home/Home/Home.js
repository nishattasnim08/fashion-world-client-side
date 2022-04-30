import React from 'react';
import { Carousel } from 'react-bootstrap';
import cloth1 from '../../../images/banner/cloth1.png'
import cloth2 from '../../../images/banner/cloth2.png'
import cloth3 from '../../../images/banner/cloth3.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cloth1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Fashion World</h1>
                            <p>Stores all kind of fashion wear for both men and women</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cloth2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Fashion World</h1>
                            <p>Stores all kind of fashion wear for both men and women</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cloth3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Fashion World</h1>
                            <p>Stores all kind of fashion wear for both men and women</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container'>

            </div>
        </div>
    );
};

export default Home;