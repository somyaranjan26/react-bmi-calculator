import React from "react"

export const Header = () => {  
    return (
            <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col align-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 text-center">BMI Calculator</h1>
                    <p className="mt-5 text-md sm:text-lg text-gray-600 text-center">
                        Body mass index (BMI) is a measure of <span className="text-pink-700">body fat</span> based on height and weight. 
                    </p>
                </div>
            </div>
    )
}