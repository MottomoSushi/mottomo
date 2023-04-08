import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,SidebarRoute,SideBtnWrap} from './SidebarElements';
import Pdf from "../menu.pdf";
import { Route, Switch, Redirect } from 'react-router-dom';
import Hour from "../Hours/index.js";

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarMenu>
               <SidebarLink to="/mottomo">Home</SidebarLink>
               <SidebarLink to="/hours">Hours</SidebarLink>
               <SidebarLink to={{ pathname: "https://www.instagram.com/mottomo.sushi/" }} target="_blank">Follow Us</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute>
                <a href={Pdf}> See Menu</a>
               </SidebarRoute>
           </SideBtnWrap>
       </SidebarContainer>
    )
}

export default Sidebar
