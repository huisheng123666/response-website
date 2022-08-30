import { NotificationPopup } from "./notification-popup"
import profile from '@/assets/profile-1.jpg'
import { MainLeftWrap } from "./style"
import { useCallback, useState } from "react"

export const MainLeft = () => {
    const [showPopup, setShowPopUp] = useState(false)
    const [active, setActive] = useState('Home')

    const clickMenu = useCallback((type: string) => {
        setActive(type)
        setShowPopUp(type === 'Notifications')
    }, [])


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
            <a className={`menu-item ${active === 'Home' ? 'active' : ''}`} onClick={() => clickMenu('Home')}>
                <span><i className="uil uil-home" /></span> <h3>Home</h3>
            </a>
            <a className={`menu-item ${active === 'Explore' ? 'active' : ''}`} onClick={() => clickMenu('Explore')}>
                <span><i className="uil uil-compass" /></span> <h3>Explore</h3>
            </a>
            <a className={`menu-item ${active === 'Notifications' ? 'active' : ''}`} id="notifications" onClick={() => clickMenu('Notifications')}>
                <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span> <h3>Notifications</h3>
                {showPopup ? <NotificationPopup/> : null}
            </a>
            <a className={`menu-item ${active === 'Message' ? 'active' : ''}`} id="messages-notifications" onClick={() => clickMenu('Message')}>
                <span><i className="uil uil-envelope-alt"><small className="notification-count">6</small></i></span> <h3>Message</h3>
            </a>
            <a className={`menu-item ${active === 'Bookmarks' ? 'active' : ''}`} onClick={() => clickMenu('Bookmarks')}>
                <span><i className="uil uil-chart-line" /></span> <h3>Bookmarks</h3>
            </a>
            <a className={`menu-item ${active === 'Theme' ? 'active' : ''}`} onClick={() => clickMenu('Theme')}>
                <span><i className="uil uil-palette" /></span> <h3>Theme</h3>
            </a>
            <a className={`menu-item ${active === 'Settings' ? 'active' : ''}`} onClick={() => clickMenu('Settings')}>
                <span><i className="uil uil-setting" /></span> <h3>Settings</h3>
            </a>
        </div>

        <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
    </MainLeftWrap>
}