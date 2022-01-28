import React from 'react';
import ProductDetail from './containers/ProductDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import {
    Routes,
    Route
  } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from './graphql/queries/getProduct';


const App = () => {
    const { data, loading, error } = useQuery(GET_PRODUCT);

    if (loading) {
        return <h1>The data is loading..</h1>
    }
    if (error) return <p>There has been an error..</p>

    const { product } = data;

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
            <Routes>
                <Route
                    path={`productDetail/${product.id}`}
                    element={
                        <ProductDetail
                            product={product}
                            id={product.id} />
                    }
                />
            </Routes>
            </main>
            <Footer />
    </div>
    )
};

export default App;
