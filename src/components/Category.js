// src/components/Category.js

import React from 'react';
import Widget from './Widget';

function Category({ category, searchTerm, openAddWidgetForm }) {
    const filteredWidgets = category.widgets.filter(widget => 
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="category">
            <h6>{category.name}</h6>
            <div className="widget-container">
                {filteredWidgets.map(widget => (
                    widget.id ? (
                        <Widget key={widget.id} widget={widget} categoryId={category.id} />
                    ) : (
                        <button 
                            key="empty-slot"
                            style={{color:"grey",backgroundColor:"white",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1",border:"none"}}
                            className="btn btn-secondary"
                            onClick={() => openAddWidgetForm(category.id)}
                        >
                            + Add Widget
                        </button>
                    )
                ))}
            </div>
        </div>
    );
}

export default Category;
