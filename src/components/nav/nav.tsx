import profile1Img from '@/assets/profile-1.jpg'
import { NavWrap } from './style'

export const Nav = () => {
    return <NavWrap>
        <div className="container">
            <h2 className="log">
                nokoSocial
            </h2>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects" /> 
            </div>
            <div className="create">
                <label htmlFor="#create-post" className='btn btn-primary'>Create</label>
                <div className="profile-photo">
                    <img src={profile1Img} />
                </div>
            </div>
        </div>
    </NavWrap>
}