// src/components/Widget.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../actions';
import { FaTimes } from 'react-icons/fa'; // Import FontAwesome icon

function Widget({ widget, categoryId }) {
    const dispatch = useDispatch();

    if (!widget.id) {
        // Render a placeholder or button if the widget is empty
        return (
            <div className="widget empty">
                <button
                    style={{color:"black",backgroundColor:"whitesmoke",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1",border:"none"}}
                    className="btn btn-secondary"
                    onClick={() => dispatch({ type: 'OPEN_ADD_WIDGET_FORM', categoryId })}
                >
                    + Add Widget
                </button>
            </div>
        );
    }

    return (
        <div className="widget">
            <div className="widget-header">
                <h6>{widget.name}</h6>
                <FaTimes 
                    className="remove-widget-icon" 
                    onClick={() => dispatch(removeWidget(categoryId, widget.id))} 
                />
            </div>
            <p>{widget.text}</p>
        </div>
    );
}

export default Widget;
