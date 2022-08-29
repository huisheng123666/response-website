import profile2 from '@/assets/profile-2.jpg'
import profile3 from '@/assets/profile-3.jpg'
import profile4 from '@/assets/profile-4.jpg'
import profile5 from '@/assets/profile-5.jpg'
import profile6 from '@/assets/profile-6.jpg'
import profile7 from '@/assets/profile-7.jpg'
import { NotificationPopupWrap } from './style'

export const NotificationPopup = () => {
    return <NotificationPopupWrap>
            <div>
                <div className="profile-photo">
                    <img src={profile2} alt="" />
                </div>
                <div className="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-photo">
                    <img src={profile3} alt="" />
                </div>
                <div className="notification-body">
                    <b>John Doe</b> commented on your post
                    <small className="text-muted">1 HOUR AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-photo">
                    <img src={profile4} alt="" />
                </div>
                <div className="notification-body">
                    <b>Mary Oppong</b> and <b>283 others </b> liked your
                    <small className="text-muted">4 MINUTES AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-photo">
                    <img src={profile5} alt="" />
                </div>
                <div className="notification-body">
                    <b>Doris Y. Lartey</b> commented on a post you are
                    <small className="text-muted">2 DAYS AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-photo">
                    <img src={profile6} alt="" />
                </div>
                <div className="notification-body">
                    <b>Donald Trump</b> commented on a post you are tagged
                    <small className="text-muted">1 HOUR AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-photo">
                    <img src={profile7} alt="" />
                </div>
                <div className="notification-body">
                    <b>Jane Doe</b> commented on your post
                    <small className="text-muted">1 HOUR AGO</small>
                </div>
            </div>
        </NotificationPopupWrap>
}