"use client"
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const GoBack = () => {
    return (
        <div>
            <button
                onClick={() => window.history.back()}
                className="btn btn-outline btn-lg gap-2"
            >
                <FaArrowLeft size={18} />
                Go Back
            </button>
        </div>
    );
};

export default GoBack;

