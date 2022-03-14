
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiFillSetting, AiOutlineSearch } from 'react-icons/ai'
import { useGlobalContext } from "../context"
const Navbar = () => {

    const {
        settingSection,
        setIsSettingSection,
        whiteTheme,
        setWhiteTheme,
        blackTheme,
        setBlackTheme,
        whiteThemeFunction,
        blackThemeFunction,
        arabic,
        setArabic
    } = useGlobalContext();

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            if (currentPosition === 0) {
                // downscroll code
                setScrolling(false);
            } else {
                // upscroll code
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return <nav className={scrolling && blackTheme ? "navbarSection navbarScrollBlack"
        : scrolling && whiteTheme ? "navbarSection navbarScrollWhite"
            : "navbarSection"}>
        <div className="rightSection">
            <Link style={{ color: whiteTheme && scrolling ? "black" : "white" }}
                className="naveLogo" to="/streaming-app/">STREAM IT</Link>
            <ul>
                <li className="navLink"><Link style={{ color: whiteTheme && scrolling ? "black" : "white" }}
                    to="/streaming-app/">{arabic ? "الرئيسيه" : "Home"}</Link></li>
                <li className="navLink"><Link style={{ color: whiteTheme && scrolling ? "black" : "white" }}
                    to="/my-list">{arabic ? "قائمتي" : "My List"}</Link></li>
            </ul>
        </div>
        <div className="leftSection">
            <AiOutlineSearch style={{ color: whiteTheme && scrolling ? "black" : "white" }}
                className="searchIcon" size="50px" />
            <AiFillSetting style={{ color: whiteTheme && scrolling ? "black" : "white" }}
                onClick={() => setIsSettingSection(!settingSection)}
                className="settingIcon" size="50px" />
        </div>
        <div className="settingSection" style={{ height: settingSection ? "250px" : "0" }}>
            <div className="settingContainer" style={{ display: settingSection ? "flex" : "none" }}>
                <h2>Theme:</h2>
                <div className="settingOptions">
                    <button style={{ border: blackTheme ? "5px solid sienna" : null }}
                        onClick={blackThemeFunction} className="black"></button>
                    <button style={{ border: whiteTheme ? "5px solid sienna" : null }}
                        onClick={whiteThemeFunction} className="white"></button>
                </div>
            </div>
            <div className="settingContainer" style={{ display: settingSection ? "flex" : "none" }}>
                    <h2>Language:</h2>
                    <div className="settingOptions">
                        <button onClick={() => setArabic(false)}
                         style={{border: arabic ? null : "5px solid sienna" }}
                             className="lang">English</button>
                        <button onClick={() => setArabic(true)}
                        style={{border: arabic ? "5px solid sienna" : null}}
                            className="lang">Arabic</button>
                    </div>

                </div>
 
        </div>
    </nav>
}

export default Navbar