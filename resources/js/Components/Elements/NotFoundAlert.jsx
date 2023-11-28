import { TiWarning } from "react-icons/ti";

import React from "react";

const NotFoundAlert = ({children}) => {
    return (
        <div className="flex items-center p-4 mb-4 w-1/2 text-sm text-red-800 rounded-lg bg-amber-100">
            <TiWarning className="flex-shrink-0 inline w-6 h-6 me-3" />
            <div>{children}</div>
        </div>
    );
};

export default NotFoundAlert;
