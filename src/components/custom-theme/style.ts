import styled from "@emotion/styled";

export const CustomThemeWrap = styled.div`
background-color: rgba(255, 255, 255, 0.5);
width: 100vw;
height: 100vh;
position: fixed;
left: 0;
top: 0;
z-index: 100;
text-align: center;
display: grid;
place-items: center;
font-size: 0.9rem;
.card {
    background: var(--color-white);
    padding: 3rem;
    border-radius: var(--card-border-radius);
    width: 50%;
    box-shadow: 0 0 1rem var(--color-primary);
    @media screen and (max-width: 992px) {
        width: 92vw;
    }
    .font-size {
        margin-top: 5rem;
        &>div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-light);
            padding: var(--search-padding);
            border-radius: var(--card-border-radius);
            .choose-size {
                background: var(--color-secondary);
                height: 0.3rem;
                width: 100%;
                margin: 0 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &>span {
                    width: 1rem;
                    height: 1rem;
                    background: var(--color-secondary);
                    border-radius: 50%;
                    cursor: pointer;
                    &.active {
                        background: var(--color-primary);
                    }
                }
            }
        } 
    }

    .color {
        margin-top: 2rem;
        .choose-color {
            background: var(--color-light);
            padding: var(--search-padding);
            border-radius: var(--card-border-radius);
            display: flex;
            align-items: center;
            justify-content: space-between;
            &>span {
                 width: 2.2rem;
                 height: 2.2rem;
                 border-radius: 50%;
                 cursor: pointer;
                 &:nth-of-type(1) {
                    background: hsl(252, 75%, 60%);
                 }
                 &:nth-of-type(2) {
                    background: hsl(52, 75%, 60%);
                 }
                 &:nth-of-type(3) {
                    background: hsl(352, 75%, 60%);
                 }
                 &:nth-of-type(4) {
                    background: hsl(152, 75%, 60%);
                 }
                 &:nth-of-type(5) {
                    background: hsl(202, 75%, 60%);
                 }
                 &.active {
                    border: 5px solid white;
                 }
            }
        }
    }

    .background {
        margin-top: 2rem;
        .choose-bg {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            @media screen and (max-width: 992px) {
                flex-wrap: wrap;
            }
            &>div {
                padding: var(--card-padding);
                width: 100%;
                display: flex;
                align-items: center;
                font-size: 1rem;
                font-weight: bold;
                border-radius: 0.4rem;
                cursor: pointer;
                &.active {
                    border: 2px solid var(--color-primary);
                }
                &.bg-1 {
                    background: white;
                    color: black;
                }
                &.bg-2 {
                    background: hsl(252, 30%, 17%);
                    color: white;
                }
                &.bg-3 {
                    background: hsl(252, 30%, 10%);
                    color: white;
                }
                span {
                    width: 2rem;
                    height: 2rem;
                    border: 2px solid var(--color-gray);
                    border-radius: 50%;
                    margin-right: 1rem;
                }
            }
        }
    }
}
`