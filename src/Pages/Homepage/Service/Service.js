import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToPackageDetail = id => {
        navigate(`/package/${id}`);
    }
    return (
        <div className="card mx-auto pt-2 col-12 col-sm-12 col-md-6 col-lg-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{price}</h2>
                <h4>{name}</h4>
                <p className="card-text">{description}</p>
                <button onClick={() => navigateToPackageDetail(id)} className="btn btn-primary btn-font">Proceed To Checkout</button>
            </div>
        </div>

    );
};

export default Service;