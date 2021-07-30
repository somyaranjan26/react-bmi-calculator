import React from 'react';

export const BMIResult = (props) => {
return (
    <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="tracking-widest text-sm title-font font-semibold text-pink-700 mb-1">EVALUATED BMI: {props.result}</h2>
        <h1 className="text-lg font-normal text-gray-600 mb-3">It currently seems <span className="font-medium text-gray-800">{props.status}</span>.</h1>
        <hr className="w-11/12 border-b border-pink-700" />
    </div>
)
}