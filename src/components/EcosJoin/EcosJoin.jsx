import Style from "./EcosJoin.module.css";
import Mail from "../../images/mail-blue.png";
import { Link } from "react-router-dom";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function EcosJoin() {

    return (
        <div className={Style.ecos__join}>
            <p className={Style.ecos__mark}>!</p>
            <p className={Style.ecos__jointext}>
                <span className={Style.ecos__span}>Don't miss the OxMiner launch.<br /></span>
                Join our community now to stay updated!
            </p>
            <Link className={Style.ecos__link} to="/join-newsletter" onClick={scrollToTopInstant}>
                <img className={Style.ecos__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </Link>
            
        </div>
    )
}

export default EcosJoin;