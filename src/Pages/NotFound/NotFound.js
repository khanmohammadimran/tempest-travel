import React from 'react';
import notfound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='my-3'>Hey buddy!</h3>
                <h2> It looks like <span className='text-danger'>you're lost</span> </h2>
            </div>
            <img className='img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;