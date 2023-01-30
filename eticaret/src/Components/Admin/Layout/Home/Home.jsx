import React from 'react'

import { Routes, Route } from "react-router-dom";

import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import SideBar from "../SideBar/sideBar";

import Dashboard from "../../Dashboard/Dashboard";
import Category from "../../categories/category/category";
import Product from "../../products/product/product";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Home() {
    return (
        <Box >
            <Grid container item spacing={3} height={"100vh"}>
                <Grid container item spacing={1} height={"10vh"}>
                    <Navbar></Navbar>
                </Grid>
                <Grid container item spacing={2} height={"80vh"}>
                    <Grid container item spacing={1} xs={2}><SideBar /></Grid>
                    <Grid container item spacing={1} xs={10}>
                        <Routes>
                            <Route path="categori" element={<Category />} />
                            <Route path="urunler" element={<Product />} />
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </Grid>
                </Grid>
                <Grid container item spacing={1} height={"15vh"}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home