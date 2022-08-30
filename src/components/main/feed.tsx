import { FC } from 'react'

export interface FeedItem {
    authorPhoto: string
    feedPhoto: string
    liked: string[]
}

export const Feed: FC<FeedItem> = ({ authorPhoto, feedPhoto, liked }) => {
    return <div className="feed">
        <div className="head">
            <div className="user">
                <div className="profile-photo">
                    <img src={authorPhoto} alt="" />
                </div>
                <div className="ingo">
                    <h3>Lana Rose</h3>
                    <small>Dubai, 15 MINUTES AGO</small>
                </div>
            </div>
            <span className="edit">
                <i className="uil uil-ellipsis-h" />
            </span>
        </div>

        <div className="photo">
            <img src={feedPhoto} alt="" />
        </div>

        <div className="action-button">
            <div className="interaction-buttons">
                <span><i className="uil uil-heart"></i></span>
                <span><i className="uil uil-comment-dots"></i></span>
                <span><i className="uil uil-share-alt"></i></span>
            </div>
            <div className="bookmark">
            <span><i className="uil uil-bookmark-full"></i></span>
            </div>
        </div>

        <div className="liked-by">
            {
                liked.map(item => <span key={item}><img src={item} alt="" /></span>)
            }
            <p>Liked by <b>Ernest Achiever</b> and 2, 323 others</p>
        </div>

        <div className="caption">
            <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span className="harsh-tag">#lifestyle</span></p>
        </div>

        <div className="comments text-muted">View all 277 comments</div>
    </div>
}