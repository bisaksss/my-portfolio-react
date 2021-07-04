import "./topBar.scss";
import { Person,Mail } from "@material-ui/icons";

export default function TopBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">codeX_Pro</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span className="iconText">(+94)71 049 8312</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span className="iconText">bisaksss@gmail.com</span>
                    </div>
                </div>
              
                <div className="right">
                    <div className="menu" onClick={()=>{
                        setMenuOpen(!menuOpen);
                    }}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
