import React from 'react';

export const BMILabel = (props) => {
    return (
        <label className="block text-sm sm:text-md font-medium text-gray-700">
            {props.label}<span className='text-pink-600'>*</span>
        </label>
    )
}