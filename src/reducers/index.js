// src/reducers/index.js

import { ADD_WIDGET, REMOVE_WIDGET } from '../actions';

import initialState from '../categories.json';


const categoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return state.map(category => {
                if (category.id === action.payload.categoryId) {
                    return {
                        ...category,
                        widgets: [...category.widgets, action.payload.widget]
                    };
                }
                return category;
            });
        case REMOVE_WIDGET:
            return state.map(category => {
                if (category.id === action.payload.categoryId) {
                    return {
                        ...category,
                        widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
                    };
                }
                return category;
            });
        default:
            return state;
    }
};

export default categoryReducer;