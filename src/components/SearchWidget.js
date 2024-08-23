// src/components/SearchWidget.js

import React from 'react';

function SearchWidget({ setSearchTerm }) {
    return (
        <div className="search-widget">
            <input
                type="text"
                placeholder="Search Widgets"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchWidget;
