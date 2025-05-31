import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = (productos, loading) => {
    return (
        <>
            <Header />
            <h1>Home</h1>
            {
                loading ? <img src={loading} alt='loading' /> :
                <ProductList productos={productos} />
            }

            <Footer />
        </>
    )
}

export default Home