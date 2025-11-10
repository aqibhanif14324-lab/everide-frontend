"use client"

import { useState } from "react"
import "./notification-styles.css"

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    newMessages: false,
    newAssessments: true,
    priceReduction: true,
    itemSold: true,
    everideNews: true,
    productInFavorites: true,
    articleFromMember: true,
    notificationsPerDay: "Unlimited",
  })

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    })
  }

  return (
    <div className="notification-container">
      <h2 className="section-title">Important notifications</h2>
      <div className="notification-section">
        <div className="notification-item">
          <span className="notification-text">New messages</span>
          <label className="toggle">
            <input type="checkbox" checked={settings.newMessages} onChange={() => handleToggle("newMessages")} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="notification-item">
          <span className="notification-text">New assessments</span>
          <label className="toggle">
            <input type="checkbox" checked={settings.newAssessments} onChange={() => handleToggle("newAssessments")} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="notification-item">
          <span className="notification-text">Price reduction of your favorite items</span>
          <label className="toggle">
            <input type="checkbox" checked={settings.priceReduction} onChange={() => handleToggle("priceReduction")} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h2 className="section-title">Secondary notifications</h2>
      <div className="notification-section">
        <div className="notification-item">
          <span className="notification-text">The favorite item has been sold</span>
          <label className="toggle">
            <input type="checkbox" checked={settings.itemSold} onChange={() => handleToggle("itemSold")} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="notification-item">
          <span className="notification-text">Everide News</span>
          <label className="toggle">
            <input type="checkbox" checked={settings.everideNews} onChange={() => handleToggle("everideNews")} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="notification-item">
          <span className="notification-text">My product is in favorites</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.productInFavorites}
              onChange={() => handleToggle("productInFavorites")}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="notification-item">
          <span className="notification-text">New article from a favorite member</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.articleFromMember}
              onChange={() => handleToggle("articleFromMember")}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h2 className="section-title">Number of notifications per day</h2>
      <div className="dropdown-container">
        <select
          className="dropdown"
          value={settings.notificationsPerDay}
          onChange={(e) => setSettings({ ...settings, notificationsPerDay: e.target.value })}
        >
          <option value="Unlimited">Unlimited</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  )
}
