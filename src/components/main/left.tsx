import { NotificationPopup } from "./notification-popup"
import profile from '@/assets/profile-1.jpg'
import { MainLeftWrap } from "./style"
import { useState } from "react"

export const MainLeft = () => {
    const [showPopup, setShowPopUp] = useState(false)


    return <MainLeftWrap>
        <a className="profile">
            <div className="profile-photo">
                <img src={profile} alt="" />
            </div>
            <div className="handle">
                <h4>Diana Ayi</h4>
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </a>

        <div className="sidebar">
            <a className="menu-item active">
                <span><i className="uil uil-home" /></span> <h3>Home</h3>
            </a>
            <a className="menu-item">
                <span><i className="uil uil-compass" /></span> <h3>Explore</h3>
            </a>
            <a className="menu-item" id="notifications">
                <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span> <h3>Notifications</h3>
                {showPopup ? <NotificationPopup/> : null}
            </a>
            <a className="menu-item" id="messages-notifications">
                <span><i className="uil uil-envelope-alt"><small className="notification-count">6</small></i></span> <h3>Message</h3>
            </a>
            <a className="menu-item">
                <span><i className="uil uil-chart-line" /></span> <h3>Bookmarks</h3>
            </a>
            <a className="menu-item">
                <span><i className="uil uil-palette" /></span> <h3>Theme</h3>
            </a>
            <a className="menu-item">
                <span><i className="uil uil-setting" /></span> <h3>Settings</h3>
            </a>
        </div>

        <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
    </MainLeftWrap>
}