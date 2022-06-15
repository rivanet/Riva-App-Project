import React, { useState,useEffect } from "react";
import { Grid } from "@material-ui/core";
import logo from "../../assets/RIVA_NETWORK_TEXT.png";
import reducers from "../../redux/slices";
import { useDispatch, useSelector } from "react-redux";
import GradientImage from "../../assets/topbar.svg";
import $ from 'jquery';

const NavBar = ({setDeltaY,scroll}) => {
    const dispatch = useDispatch();
    const isSlideAnimationStarted = useSelector((state) => state.isSlideAnimationStarted.value);

    const handleClick = () => {
//        $("html, body").animate({ scrollTop: 0 }, 1000);
        dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({ isStarted: false, up: false }));
        setTimeout(() => {
            dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({isStarted: true, up: true}));
        },10)
        setTimeout(() => {
            setDeltaY(0);
        },1000)
    };
    const [imageLoaded, setImageLoaded] = useState(false);
    let prevScrollpos = 0;

    useEffect(() => {

        if(scroll > 840) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "10px";
            } else {
                document.getElementById("navbar").style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
        }
        
    }, [])
    return (
        <div className="navbar-container">
            {
                scroll>840? (
                    <Grid container className={`navbar-${imageLoaded?'visible':'hidden'}`} onLoad={()=>setImageLoaded(true)}>
                    <div style={{position: "relative"}}>
                        <img src={GradientImage} style={{position: "absolute", height: "24vh", width:"100%"}} />
                    </div>
                
                    <Grid item xs={3} md={3} lg={3} className={`smooth-image image-${imageLoaded?'visible':'hidden'} `} onLoad={()=>setImageLoaded(true)} id="navbar">
                        <div className="navbar-button-border clickable" onClick={handleClick}></div>
                        <button className="navbar-button clickable" onClick={handleClick}>
                            OYNA
                        </button>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} className="navbar-logo" style={{zIndex: "1"}}>
                       
                       {scroll>840? <img src={logo} className={`smooth-image image-${imageLoaded?'visible':'hidden'}`} onLoad={()=>setImageLoaded(true)} />:null}
                    </Grid>
                </Grid>
                ):null
            }
           
        </div>
    );
};

export default NavBar;
