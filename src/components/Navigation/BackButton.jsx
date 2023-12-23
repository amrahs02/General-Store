import React from 'react'
import { Navigate } from 'react-router-dom'

const BackButton = () => {
    return (
        <div>
            <button className="btn bg-blue-500  rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 m-6" onClick={() => Navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

export default BackButton
