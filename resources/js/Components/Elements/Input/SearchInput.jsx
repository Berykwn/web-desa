import React from "react";

const SearchInput = ({ keyword, onChange, pages }) => {
    return (
        <input
            type="text"
            className="w-full bg-gray-50 lowercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-300 focus:border-slate-500 block"
            placeholder={`Ketik untuk mencari ${pages} ...`}
            value={keyword}
            onChange={onChange} 
        />
    );
};

export default SearchInput;
