import React from 'react'
import  classes from '../../../css/userPageStyle.module.css'
import {ReactComponent as Fav} from '../../../img/userPage/fav.svg'
import {ReactComponent as Set} from '../../../img/userPage/settings.svg'
import {ReactComponent as Back} from '../../../img/userPage/iconBack.svg'
function PersonalPanel() {
  return (
    <div className={classes.user__panel}>
        <h2>Личный кабинет</h2>
        <div className={classes.panel__parent}>
            <div className={classes.panel__fav}>
                <Fav/>
                <span>ИЗБРАННЫЕ</span>
            </div>
            <div className={classes.panel__fav}>
                <Set/>
                <span>НАСТРОЙКИ</span>
            </div>
        </div>
        <div className={classes.btn__back}>
          <Back/>
          <span>Вернуться назад</span>
        </div>
    </div>
  )
}

export default PersonalPanel