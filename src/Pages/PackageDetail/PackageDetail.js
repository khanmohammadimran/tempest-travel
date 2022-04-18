import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PackageDetail = () => {
    const { packageId } = useParams();
    return (
        <div className='text-center my-3'>
            <h2>Thank you for selecting <span className='text-danger'>this package:</span> {packageId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default PackageDetail;