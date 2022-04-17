import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (

        <div className="card mx-auto pt-2 col-12 col-sm-12 col-md-6 col-lg-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{price}</h2>
                <h4>{name}</h4>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Proceed To Checkout</button>
            </div>
        </div>

    );
};

export default Service;