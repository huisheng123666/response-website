import { MainLeft } from "./left"
import { MainMiddle } from "./middle"
import { MainWrap } from "./style"

export const Main = () => {
    return <MainWrap>
        <div className="container">
            <MainLeft/>

            <MainMiddle/>

            <div className="right">
            </div>
        </div>
    </MainWrap>
}