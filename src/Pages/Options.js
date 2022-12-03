import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Options = () => {
    let activeStyle = {

        backgroundColor: '#4718B3',
        fontSize: '16px',
        color: "#FFFA5C",
        textAlign: "center",
    
        borderRadius: '5px',
        padding: '2px 2px'
    
      };
    

    return (
        <div className='lg:w-full mx-auto'>
        <div className="tabs  grid grid-cols-4 mg:grid-cols-6 lg:grid-cols-12 xl:grid-cols-16  text-center">
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home' className="tab tab-bordered mx-1">All Size</NavLink> 
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}    to='/home' className="tab tab-bordered mx-1 tab-active">Tab 2</NavLink> 
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}    to='/about' className="tab tab-bordered mx-1">28gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home1' className="tab tab-bordered mx-1">27gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home2' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home3' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home4' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home5' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home6' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home7' className="tab tab-bordered mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home8' className=" tab-bordered tab mx-1">48gm</NavLink>
          <NavLink  style={({ isActive }) => isActive ? activeStyle : undefined}   to='/home9' className="tab tab-bordered mx-1">48gm</NavLink>
        </div>
        </div>
    );
};

export default Options;