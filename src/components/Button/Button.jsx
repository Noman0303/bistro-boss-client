import React from 'react';

const Button = ({buttonDetails}) => {
    return (
        <div>
            <button className='btn btn-outline border-0 border-b-4 mt-4 text-xl rounded-lg uppercase'>{buttonDetails}</button>
        </div>
    );
};

export default Button;