import { MainLeft } from "./left"
import { MainRight } from "./main-right"
import { MainMiddle } from "./middle"
import { MainWrap } from "./style"

export const Main = () => {
    return <MainWrap>
        <div className="container">
            <MainLeft/>

            <MainMiddle/>

            <MainRight/>
        </div>
    </MainWrap>
}