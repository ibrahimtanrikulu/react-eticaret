import React from 'react'

import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import SideBar from "../SideBar/sideBar";

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <SideBar></SideBar>
            <div>Home</div>
            <Footer></Footer>
        </>
    )
}

export default Home