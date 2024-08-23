// src/components/App.js

import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../actions';
import { v4 as uuidv4 } from 'uuid';
import Category from './Category';
import Navbar from './Navbar';
import CustomOffcanvas from './Offcanvas';

function App() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const openOffcanvas = () => {
        setTimeout(() => {
            const offcanvasElement = document.getElementById('offcanvasRight');
            if (offcanvasElement) {
                const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
                offcanvas.show();
            }
        }, 0);
    };
    

    const openAddWidgetForm = (categoryId) => {
        console.log("Opening Add Widget Form for category:", categoryId); // Debug log
        setSelectedCategoryId(categoryId);
        openOffcanvas();
    };
    
    const handleWidgetChange = (e, widget) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            dispatch(addWidget(selectedCategoryId, widget));
        } else {
            dispatch(removeWidget(selectedCategoryId, widget.id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (widgetName && widgetText && selectedCategoryId) {
            const newWidget = {
                id: uuidv4(),
                name: widgetName,
                text: widgetText
            };
            dispatch(addWidget(selectedCategoryId, newWidget));
            setWidgetName('');
            setWidgetText('');
            setSelectedCategoryId(null);
        }
    };

    return (
        <div>
            <Navbar setSearchTerm={setSearchTerm} openOffcanvas={openOffcanvas} />
            <div className="container mt-4">
                {categories.map(category => (
                    <Category 
                        key={category.id} 
                        category={category} 
                        searchTerm={searchTerm} 
                        openAddWidgetForm={openAddWidgetForm}
                    />
                ))}
            </div>
            {selectedCategoryId && (
                <CustomOffcanvas
                    categories={categories}
                    handleWidgetChange={handleWidgetChange}
                    handleSubmit={handleSubmit}
                    widgetName={widgetName}
                    setWidgetName={setWidgetName}
                    widgetText={widgetText}
                    setWidgetText={setWidgetText}
                    selectedCategoryId={selectedCategoryId}
                />
            )}
        </div>
    );
}

export default App;
