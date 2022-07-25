import classes from "../styles/Video.module.css";
import img from "../assets/images/3.jpg";

export default function Video({title, noq}){
    return(
        <div className={classes.video}>
            <img src={img} alt="alt img" />
            <p>{title}</p>
            <div className={classes.qmeta}>
            <p> {noq} </p>
            <p>Score : Not taken yet</p>
            </div>
        </div>
    )
}