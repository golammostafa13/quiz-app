import classes from "../styles/Video.module.css";
import img from "../assets/images/3.jpg";

export default function Video({title, id, noq}){
    return(
        <div className={classes.video}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="alt img" />
            <p>{title}</p>
            <div className={classes.qmeta}>
            <p> {noq} </p>
            <p>Score : { noq*5 }</p>
            </div>
        </div>
    )
}