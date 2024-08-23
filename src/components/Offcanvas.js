import React, { useState } from 'react';

function CustomOffcanvas({
    categories,
    handleWidgetChange,
    handleSubmit,
    widgetName,
    setWidgetName,
    widgetText,
    setWidgetText
}) {
    // Declare state for selected category ID
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id); // Default to first category

    // Function to handle category change
    const handleCategoryChange = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight" // Ensure this ID is used consistently
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Add Widget</h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav nav-tabs">
                    {categories.map(category => (
                        <li className="nav-item" key={category.id}>
                            <button
                                className={`nav-link ${selectedCategoryId === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="tab-content mt-3">
                    <form onSubmit={(e) => handleSubmit(e, selectedCategoryId)}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Widget Name"
                            value={widgetName}
                            onChange={(e) => setWidgetName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Widget Text"
                            value={widgetText}
                            onChange={(e) => setWidgetText(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary mt-3">Add Widget</button>

                        <h5 className="mt-4">Manage Widgets in {categories.find(c => c.id === selectedCategoryId)?.name}</h5>
                        {categories.find(c => c.id === selectedCategoryId)?.widgets.map(widget => (
                            <div key={widget.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={true} // Assuming this is true if the widget is currently selected
                                        onChange={(e) => handleWidgetChange(e, widget, selectedCategoryId)}
                                    />
                                    {widget.name}
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomOffcanvas;
