import "./intro.scss";
import {PlayForWork} from "@material-ui/icons";
export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/my.png" alt="" />
                </div>

            </div>
            <div className="right">
                <div className="rightWrapper">
                    <h2>Hi There I'm</h2>
                    <h1>Bisak Sampath</h1>
                    <h3>Freelance <span></span></h3>
                </div>
                <a href="#portfolio">
                <PlayForWork className="downArrow"/>
                </a>

            </div>
           
        </div>
    )
}
