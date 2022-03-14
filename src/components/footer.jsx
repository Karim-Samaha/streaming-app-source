import { useGlobalContext } from "../context";
const Footer = () => {
    const { whiteTheme, arabic } = useGlobalContext();
    return <section style={{color: whiteTheme ? "black" : "white"}}
    className="footerSection">
        <div className="sectionOne">
            <h2>{arabic ? "معلومات عنا" : "About Us"}</h2>
            <ul>
                <li><a  style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "الشركه" : "Company"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "التواصل" : "Contact"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "فرص العمل" : "Careers"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "" : "Store"}</a></li>
            </ul>
        </div>
        <div className="sectionTwo">
            <h2>{arabic ? "روابط هامه" : "Useful Links"}</h2>
            <ul>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "الدعم" : "Support"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "الاسترجاع" : "Refund"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "اسئله متكرره" : "FAQ"}</a></li>
                <li><a style={{color: whiteTheme ? "black" : "white"}}
                href="#">{arabic ? "" : "Stores"}</a></li>
            </ul>
        </div>
        <div className="sectionThree">
            <h2>{arabic ? "اشترك في نشرتنا الإخبارية" : "Subscribe to our news Letter"}</h2>
            <form>
                <input 
                style={{backgroundColor: whiteTheme ? "black" : "white", color: whiteTheme ? "white" : "black"}} 
                className="emalInput" type="text" placeholder="Email Adress" />
                <input className="submitEmail" type="submit" />
            </form>
            <h3>{arabic ? "تابعنا" : "Follow Us"}</h3>
            <div className="socialImgs">
                <img className="socialImg" src="./assets/facebook.png" alt="" />
                <img className="socialImg" src="./assets/instagram.png" alt="" />
                <img className="socialImg" src="./assets/twitter.png" alt="" />
            </div>
            <h4>&copy; Stream, All Rights Reserved </h4>
        </div>
    </section>
}

export default Footer;