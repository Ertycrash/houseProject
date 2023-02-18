import { Avatar } from '@mui/material'
import React from 'react'
import classes from '../../css/header.module.css'
import { ReactComponent as Logo } from '../../img/logo_project.svg'

function Header() {
    const auth = true

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__inner}>
          <div className={classes.logo}>
            <Logo />
            <h2>
              <strong>Trade House</strong>
            </h2>
          </div>
            <div className={classes.btns}>
              <button className={classes.btn__add}>Добавить объявление</button>

             {
                auth ?  <button className={classes.btn__signUp}>Войти</button>:
                <Avatar sx={{
                    width:'50px',
                    height:'50px'
                }}/>
             }

            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
