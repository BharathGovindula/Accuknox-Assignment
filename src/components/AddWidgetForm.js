// src/components/AddwigetForm

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from '../actions';
import { v4 as uuidv4 } from 'uuid';




function AddWidgetForm({ categoryId, setShowForm }) {
    const dispatch = useDispatch();
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const widgets = useSelector(state => 
        state.categories.find(category => category.id === categoryId).widgets
    );

    const handleWidgetChange = (e, widget) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            dispatch(addWidget(categoryId, widget));
        } else {
            dispatch(removeWidget(categoryId, widget.id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (widgetName && widgetText) {
            const newWidget = {
                id: uuidv4(),
                name: widgetName,
                text: widgetText
            };
            dispatch(addWidget(categoryId, newWidget));
            setShowForm(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                required
            />
            <button type="submit">Add Widget</button>

            <h3>Manage Widgets</h3>
            {widgets.map(widget => (
                <div key={widget.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={true}
                            onChange={(e) => handleWidgetChange(e, widget)}
                        />
                        {widget.name}
                    </label>
                </div>
            ))}
        </form>
    );
}

export default AddWidgetForm;