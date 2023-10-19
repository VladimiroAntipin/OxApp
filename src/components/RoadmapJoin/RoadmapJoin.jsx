import Style from "./RoadmapJoin.module.css";
import Mail from "../../images/mail-blue.png";
import { Link } from "react-router-dom";
import scrollToTopInstant from "../../utils/scrollToTopInstant";

function RoadmapJoin() {

    return (
        <div className={Style.roadmap__join}>
            <p className={Style.roadmap__mark}>!</p>
            <p className={Style.roadmap__jointext}>
                <span className={Style.roadmap__span}>Don't miss the OxMiner launch.<br /></span>
                Join our community now to stay updated!
            </p>
            <Link className={Style.roadmap__link} to="/join-newsletter" onClick={scrollToTopInstant}>
                <img className={Style.roadmap__socialicon} src={Mail} alt="Mail" />
                Join our newsletter
            </Link>

        </div>
    )
}

export default RoadmapJoin;