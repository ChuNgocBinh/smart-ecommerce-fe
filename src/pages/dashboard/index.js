import EventSlider from "components/eventSlider"
import { categorys } from "constants/constant"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { changePath } from "redux/slice"

const DashBoard = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changePath('dashboard'))
  }, [dispatch])

  return (
    <div className="p-dashboard">
      <div className="p-dashboard-slider">
        <EventSlider></EventSlider>
      </div>
      <div className="p-dashboard-category">
        <div className="p-dashboard-category-title">{t('p.dashboard.category.title')}</div>
        <div className="p-dashboard-category-list">
          {
            categorys.map(el => (
              <div className="p-dashboard-category-list-item" key={el.id}>
                <img src={el.src} alt={el.alt}></img>
                <p>{t(el.title)}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DashBoard