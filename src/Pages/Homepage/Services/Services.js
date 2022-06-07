import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <div className='row mx-auto'>
                <h3 className='text-center py-3'>Our Exclusive</h3>
                <h2 className='text-center'>See Our <span className='text-danger'>Packages</span> </h2>
                {
                    // services.map(service => <Service
                    //     key={service.id}
                    //     service={service}
                    // ></Service>)
                    services.map(service => <div
                        key={service.id}
                        service={service}
                    ></div>)
                }
            </div>
        </div>
    );
};

export default Services;