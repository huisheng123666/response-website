import { MainMiddleWrap } from "./style"
import profile from '@/assets/profile-1.jpg'
import profile8 from '@/assets/profile-8.jpg'
import profile9 from '@/assets/profile-9.jpg'
import profile10 from '@/assets/profile-10.jpg'
import profile11 from '@/assets/profile-11.jpg'
import profile12 from '@/assets/profile-12.jpg'
import { useEffect, useState } from "react"
import { Feed, FeedItem } from "./feed"

export const MainMiddle = () => {
    const [feeds, setFeeds] = useState<FeedItem[]>([])

    useEffect(() => {
        const list: FeedItem[] = []
        for (let i = 1; i < 8; i++) {
            list.push({
                authorPhoto: `/images/profile-${i+1}.jpg`,
                feedPhoto: `/images/feed-${i}.jpg`,
                liked: [
                    `/images/profile-${i+2}.jpg`,
                    `/images/profile-${i+3}.jpg`,
                    `/images/profile-${i+4}.jpg`,
                ]
            })
        }
        setFeeds(list)
    }, [])

    return <MainMiddleWrap>
        <div className="stories">
            <div className="story">
                <div className="profile-photo">
                    <img src={profile8} alt="" />
                </div>
                <div className="name">Your Story</div>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src={profile9} alt="" />
                </div>
                <div className="name">Lilla James</div>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src={profile10} alt="" />
                </div>
                <div className="name">Winnie Hale</div>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src={profile11} alt="" />
                </div>
                <div className="name">Daniel Bale</div>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src={profile12} alt="" />
                </div>
                <div className="name">Jane Doe</div>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src={profile8} alt="" />
                </div>
                <div className="name">Tina White</div>
            </div>
        </div>
        <form className="create-post">
            <div className="profile-photo">
                <img src={profile} alt="" />
            </div>
            <input type="text" placeholder="Wha's on your mind, Diana?" id="create-post" />
            <input type="submit" value="Post" className="btn btn-primary" />
        </form>

        <div className="feeds">
            {
                feeds.map(item => <Feed key={item.authorPhoto} {...item} />)
            }
        </div>
    </MainMiddleWrap>
}