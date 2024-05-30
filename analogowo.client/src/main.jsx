import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductEntry } from './product/ProductEntry.jsx';
import { Inventory } from './product/Inventory.jsx';
import { Layout } from './layout/Layout.jsx';
import { InventoryGraphicalPreview } from './product/InventoryGraphicalPreview.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/productentry' element={<Layout />}>
                    <Route index element={<ProductEntry />} />
                </Route>
                <Route path='/inventory' element={<Layout />}>
                    <Route index element={<Inventory />} />
                </Route>
                <Route path='/inventoryview' element={<Layout />}>
                    <Route index element={<InventoryGraphicalPreview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);