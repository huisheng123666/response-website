import styled from '@emotion/styled'

export const NavWrap = styled.nav`
width: 100%;
background-color: var(--color-white);
padding: 0.7rem 0;
position: fixed;
top: 0;
z-index: 10;
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search-bar {
    background: var(--color-light);
    border-radius: var(--border-radius);
    padding: var(--search-padding);
    input[type="search"] {
        background: transparent;
        width: 30vw;
        margin-left: 1rem;
        font-size: 0.9rem;
        color: var(--color-dark);
        &::placeholder {
            color: var(--color-gray);
        }
    }
}
.create {
    display: flex;
    align-items: center;
    gap: 2rem;
}
`