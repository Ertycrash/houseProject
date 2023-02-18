import React from 'react'
import stl from '../../css/homePage.module.css'
import BtnFIlter from '../UI/btnFilter/BtnFIlter'
const btns = ['Купить', 'Снять', 'Продать', 'Сдать']
function FilterHome() {
  return (
    <div className={stl.filter}>
      <div className="container">
        <div className={stl.filter__inner}>
          <div className={stl.btns}>
            {btns.map(item => (
              <BtnFIlter>{item}</BtnFIlter>
            ))}
          </div>
          <div className={stl.until__filters}>
            <span>Цена</span>
            <div className={stl.filters}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterHome
