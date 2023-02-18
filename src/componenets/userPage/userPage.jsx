import React from 'react';
import logo from '../../img/logo_project.svg'
import  classes from '../../css/userPageStyle.module.css'
import PersonalPanel from './userPageComponents/PersonalPanel';
import Panel from './userPageComponents/Panel';


function UserPage() {
    
    return (
        <section className={classes.user__Page}>
            <div className={classes.title}>
                <h1>Дом вашей мечты</h1>
            </div>
            <div className='container'>
                <div className={classes.user__Page__inner}>
                <PersonalPanel/>
                <Panel/>
                </div>
                </div>  
        </section>
    );
}

export default UserPage;