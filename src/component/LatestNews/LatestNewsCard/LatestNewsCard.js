import React from 'react';
import { Link } from 'react-router-dom';

const LatestNewsCard = ({ cart }) => {
    const { img, title } = cart
    // m - 6
    return (
        <div className="carousel-item flex flex-col  justify-center items-center">
            <img src={img} alt="Drink" />

            <p className='text-yellow-400 font-semibold text-center'><Link>{title}</Link></p>
        </div>
    );
};

export default LatestNewsCard;