import { Link } from "react-router-dom";
import './style.css'
import { FaUserAlt, FaBookOpen, FaEnvelope, FaCheckDouble   } from "react-icons/fa";

type SideBarProps = {
  title:string;
  description:string;
  path:string;
  emoji:string;
  select: boolean;
}

function LeftSideBar({title, description, path, emoji, select}:SideBarProps){

  return(
    <div className="side-bar-box">
      <Link className="side-bar-link-box" to={path}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="side-bar-emoji-box">
          {emoji === 'FaUserAlt' && <FaUserAlt />}
          {emoji === 'FaBookOpen' && <FaBookOpen />}
          {emoji === 'FaEnvelope' && <FaEnvelope />}
          {emoji === 'FaCheckDouble  ' && <FaCheckDouble   />}
        </div>
        <div className={select && "button-select-session selected" || "button-select-session"}>

        </div>
      </Link>
    </div>
  )
}

export default LeftSideBar;