

import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Footer/PageFooter';
import PageNavBar from '../Navbar/PageNavBar';
import '../App.css'
import Options from '../Pages/Options';




const Main = () => {
    return (
        <div>
            <div className=' min-height'>
                <PageNavBar></PageNavBar>
               
                <Outlet>
          
                </Outlet>
            </div>
            <div>
                <PageFooter></PageFooter>
            </div>
        </div>
    );
};

export default Main;