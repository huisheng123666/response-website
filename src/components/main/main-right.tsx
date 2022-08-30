import { MainRightWrap } from "./style"
import profile13 from '@/assets/profile-13.jpg'
import profile14 from '@/assets/profile-14.jpg'
import profile15 from '@/assets/profile-15.jpg'
import profile16 from '@/assets/profile-16.jpg'
import profile17 from '@/assets/profile-17.jpg'

export const MainRight = () => {
    return <MainRightWrap>
        <div className="messages">
            <div className="heading">
                <h4>Messages</h4><i className="uil uil-edit"></i>
            </div>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search messages" id="message-search" />
            </div>

            <div className="category">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className="message-requests">Request(7)</h6>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src={profile17} alt="" />
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-bold">2 new message</p>
                </div>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src={profile14} alt="" />
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>

            <div className="message">
                <div className="profile-photo">
                    <img src={profile15} alt="" />
                    <div className="active"/>
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
            
            <div className="message">
                <div className="profile-photo">
                    <img src={profile16} alt="" />
                </div>
                <div className="message-body">
                    <h5>Edem Quist</h5>
                    <p className="text-muted">Just woke up bruh</p>
                </div>
            </div>
        </div>

        <div className="friend-requests">
            <h4>Requests</h4>
            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src={profile13} alt="" />
                    </div>
                    <div>
                        <h5>Hajia Bintu</h5>
                        <p className="text-muted">
                            8 mutual friends
                        </p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">
                        Acept
                    </button>
                    <button className="btn">
                        Decline
                    </button>
                </div>
            </div>

            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src={profile13} alt="" />
                    </div>
                    <div>
                        <h5>Hajia Bintu</h5>
                        <p className="text-muted">
                            8 mutual friends
                        </p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">
                        Acept
                    </button>
                    <button className="btn">
                        Decline
                    </button>
                </div>
            </div>

            <div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src={profile13} alt="" />
                    </div>
                    <div>
                        <h5>Hajia Bintu</h5>
                        <p className="text-muted">
                            8 mutual friends
                        </p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">
                        Acept
                    </button>
                    <button className="btn">
                        Decline
                    </button>
                </div>
            </div>
        </div>
    </MainRightWrap>
}