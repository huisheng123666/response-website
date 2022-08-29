import styled from "@emotion/styled";
import story1 from '@/assets/story-1.jpg'
import story2 from '@/assets/story-2.jpg'
import story3 from '@/assets/story-3.jpg'
import story4 from '@/assets/story-4.jpg'
import story5 from '@/assets/story-5.jpg'
import story6 from '@/assets/story-6.jpg'

export const MainWrap = styled.main`
position: relative;
top: 5.4rem;
.container {
    display: grid;
    grid-template-columns: 18vw auto 20vw;
    column-gap: 2rem;
    position: relative;
}
`

export const MainLeftWrap = styled.div`
height: max-content;
position: sticky;
top: var(--sticky-top-left);
.profile {
    padding: var(--card-padding);
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
}
.sidebar {
    margin-top: 1rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    .menu-item {
        display: flex;
        align-items: center;
        height: 4rem;
        cursor: pointer;
        transition: all 300ms ease;
        position: relative;
        &:hover {
            background: var(--color-light);
        }
        &.active {
            background: var(--color-light);
            i, h3 {
                color: var(--color-primary);
            }
            &::before {
                content: '';
                display: block;
                width: 0.5rem;
                height: 100%;
                position: absolute;
                background: var(--color-primary);
            }
        }
        &:first-of-type.active {
            border-top-left-radius: var(--card-border-radius);
            overflow: hidden;
        }
        &:last-child.active {
            border-bottom-left-radius: var(--card-border-radius);
            overflow: hidden;
        }
    }
    i {
        font-size: 1.4rem;
        color: var(--color-gray);
        margin-left: 2rem;
        position: relative;
        .notification-count {
            background: var(--color-danger);
            color: white;
            font-size: 0.7rem;
            width: fit-content;
            border-radius: 0.8rem;
            padding: 0.1rem 0.4rem;
            position: absolute;
            top: -0.2rem;
            right: -0.3rem;
        }
    }
    h3 {
        margin-left: 1.5rem;
        font-size: 1rem;
    }
}
.btn {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
}
`


export const NotificationPopupWrap = styled.div`
position: absolute;
top: 0;
left: 110%;
width: 30rem;
background: var(--color-white);
border-radius: var(--card-border-radius);
padding: var(--card-padding);
box-shadow: 0 0 2rem hsl(var(--color-primary), 75, 60% 25%);
z-index: 8;
&::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    background: var(--color-white);
    position: absolute;
    left: -0.6rem;
    transform: rotate(45deg);
}
&>div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    small {
        display: block;
    }
}
`

export const MainMiddleWrap = styled.div`
.stories {
    display: flex;
    justify-content: space-between;
    height: 12rem;
    gap: 0.5rem;
    .story {
        padding: var(--card-padding);
        border-radius: var(--card-border-radius);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: 0.75rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 5rem;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
            position: absolute;
            bottom: 0;
        }
        .name {
            z-index: 2;
        }
        &:nth-of-type(1) {
            background: url(${story1}) no-repeat center center/cover;
        }
        &:nth-of-type(2) {
            background: url(${story2}) no-repeat center center/cover;
        }
        &:nth-of-type(3) {
            background: url(${story3}) no-repeat center center/cover;
        }
        &:nth-of-type(4) {
            background: url(${story4}) no-repeat center center/cover;
        }
        &:nth-of-type(5) {
            background: url(${story5}) no-repeat center center/cover;
        }
        &:nth-of-type(6) {
            background: url(${story6}) no-repeat center center/cover;
        }
        .profile-photo {
            width: 2rem;
            height: 2rem;
            align-self: flex-start;
            border: 3px solid var(--color-primary);
        }
    }
}
`