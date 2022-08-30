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
.create {
    display: flex;
    align-items: center;
    gap: 2rem;
}
@media screen and (max-width: 992px) {
    .search-bar {
        display: none;
    }
}
`