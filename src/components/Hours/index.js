import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import  {HoursContainer, HoursContent, HoursItems, HoursH1, HoursP} from './HoursElements';



const Hours = () => {
    return (
        <HoursContainer>
            <HoursContent>
                <HoursItems>
                    <HoursH1>Hours</HoursH1>
                    <HoursP>Monday:         Closed</HoursP>
                    <HoursP>Tues-Thurs:     11 - 9</HoursP>
                    <HoursP>Fri-Sat:        11 - 9:30</HoursP>
                    <HoursP>Sunday:         11 - 9</HoursP>
                    <HoursP>**Everday we are closed from 2:30 to 4:30**</HoursP>
                </HoursItems>
            </HoursContent>
        </HoursContainer>
    )
}

export default Hours
