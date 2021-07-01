import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auc from '../../../hoc/Auc';


const sideDrawer=(props)=>{
let attachedClasses=['SideDrawer','Close'];
if(props.open){
    attachedClasses=['SideDrawer','Open'];
}
    return (
        <Auc>
             <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
            
            <Logo height="11%" style={{marginBottom:'32px'}} />
            
           
            <nav >
                 <NavigationItems />   
            </nav>
        </div>

        </Auc>
       
    );
};

export default sideDrawer;