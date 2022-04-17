import React from 'react';

const Service = ({ service }) => {
    const { name, image, description, price, packages } = service;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Name:{packages.children}</h2>
        </div>
    );
};

export default Service;