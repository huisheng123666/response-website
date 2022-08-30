import { useAppContext } from "@/context"
import { useCallback, useState } from "react"
import { CustomThemeWrap } from "./style"

const primaryColors = [
    'hsl(252, 75%, 60%)',
    'hsl(52, 75%, 60%)',
    'hsl(352, 75%, 60%)',
    'hsl(152, 75%, 60%)',
    'hsl(202, 75%, 60%)'
]

const bgColors = [
    {
        name: 'Light',
        darkColorLightness: '17%',
        whiteColorlightness: '100%',
        lightColorLightness: '95%',
    },
    {
        name: 'Dim',
        darkColorLightness: '95%',
        whiteColorlightness: '20%',
        lightColorLightness: '15%',
    },
    {
        name: 'Lights Out',
        darkColorLightness: '95%',
        whiteColorlightness: '10%',
        lightColorLightness: '0%',
    }
]

export const CustomTheme = () => {
    const root = document.querySelector(':root') as HTMLElement
    const { setShowCustomTheme } = useAppContext()

    const [fontSize, setFontSize] = useState(root?.style.getPropertyValue('font-size') || '16px')
    const [primayColor, setPrimaryColor] = useState(root?.style.getPropertyValue('--color-primary') || 'hsl(252, 75%, 60%)')
    const [whiteColorlightness, setWhiteColorlightness] = useState(root?.style.getPropertyValue('--white-color-lightness') || '100%')

    const changeRem = useCallback((rem: string) => {
        setFontSize(rem)
        document.documentElement.style.fontSize = rem
    }, [])

    const changePrimaryColor = useCallback((color: string) => {
        root?.style.setProperty('--color-primary', color)
        setPrimaryColor(color)
    }, [])

    const changeBgColor = useCallback((bgColor: typeof bgColors[0]) => {
        root?.style.setProperty('--dark-color-lightness', bgColor.darkColorLightness)
        root?.style.setProperty('--light-color-lightness', bgColor.lightColorLightness)
        root?.style.setProperty('--white-color-lightness', bgColor.whiteColorlightness)

        setWhiteColorlightness(bgColor.whiteColorlightness)
    }, [])
    
    return <CustomThemeWrap onClick={() => setShowCustomTheme(false)}>
        <div className="card" onClick={(e) => e.stopPropagation()}>
            <h2>Customize your view</h2>
            <p className="text-muted">Manage your font size, color, and background</p>

            <div className="font-size">
                <h4>Font Size</h4>
                <div>
                    <h6>Aa</h6>
                    <div className="choose-size">
                        <span onClick={() => changeRem('10px')} className={`font-size-1 ${fontSize === '10px' ? 'active' : ''}`}></span>
                        <span onClick={() => changeRem('13px')} className={`font-size-2 ${fontSize === '13px' ? 'active' : ''}`}></span>
                        <span onClick={() => changeRem('16px')} className={`font-size-2 ${fontSize === '16px' ? 'active' : ''}`}></span>
                        <span onClick={() => changeRem('19px')} className={`font-size-2 ${fontSize === '19px' ? 'active' : ''}`}></span>
                        <span onClick={() => changeRem('22px')} className={`font-size-2 ${fontSize === '22px' ? 'active' : ''}`}></span>
                    </div>
                    <h3>Aa</h3>
                </div>
            </div>

            <div className="color">
                <h4>Color</h4>
                <div className="choose-color">
                    {
                        primaryColors.map(item => 
                            <span
                                key={item}
                                onClick={() => changePrimaryColor(item)}
                                className={primayColor === item ? 'active' : ''}
                            />
                        )
                    }
                </div>
            </div>

            <div className="background">
                <h4>Background</h4>
                <div className="choose-bg">
                    {
                        bgColors.map((bgColor, index) => <div
                                key={bgColor.name}
                                className={`bg-${index + 1} ${bgColor.whiteColorlightness === whiteColorlightness ? 'active' : ''}`}
                                onClick={() => changeBgColor(bgColor)}
                            >
                            <span></span>
                            <h5>{bgColor.name}</h5>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </CustomThemeWrap>
}