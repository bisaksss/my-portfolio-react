import "./intro.scss";
import {PlayForWork} from "@material-ui/icons";
import { useEffect,useRef } from "react";
import { init } from 'ityped';


export default function Intro() {
    
   const textref = useRef();
    
    useEffect(() => {
        init(textref.current, { showCursor: true,backDelay:  1500, strings: ['Web Developer', 'Video Editor' ] })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/my.png" alt="" />
                </div>

            </div>
            <div className="right">
                <div className="rightWrapper">
                    <h2>Hi there I'm</h2>
                    <h1>Bisak Sampath</h1>
                    <h3>Freelance <span ref={textref}></span></h3>
                </div>
                <a href="#portfolio">
                <PlayForWork className="downArrow"/>
                </a>

            </div>
           
        </div>
    )
}
