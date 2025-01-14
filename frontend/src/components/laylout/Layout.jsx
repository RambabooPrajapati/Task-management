import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className={style['main-content']}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
