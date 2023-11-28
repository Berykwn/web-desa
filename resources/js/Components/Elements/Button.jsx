import React from "react";

const Button = ({ className = "", disabled, children, ...props }) => {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2  border border-transparent rounded-md font-semibold text-xs text-white tracking-widest transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button; 
