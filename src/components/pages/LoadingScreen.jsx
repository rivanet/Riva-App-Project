import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainLauncherbg from "../../assets/Group-363.svg";
import Launcher from "../../assets/launcher-2.svg";
import RivaLogo from "../../assets/riva.svg";
import LuncherUser from "../../assets/launcher-user.svg";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { useDispatch, useSelector } from "react-redux";
import reducers from "../../redux/slices";
import logo from "../../assets/RIVA_NETWORK_TEXT.png";
import GradientImage from "../../assets/topbar.svg";
import SettingsPage from "./SettingsPage";
import { style } from "@mui/system";
import SmallImageBackground from "../../assets/launcher-2-background.svg";
import RSC from "react-scrollbars-custom";

const MainLauncher = () => {
    const [deltaY, setDeltaY] = useState(0);
    const navigate = useNavigate();
    const isSlideAnimationStarted = useSelector((state) => state.isSlideAnimationStarted.value);
    const [gameButtonIsClicked, setGameButtonIsClicked] = useState(false);
    const dispatch = useDispatch();
    console.log(isSlideAnimationStarted.isStarted,isSlideAnimationStarted.up)

    

    useEffect(() => {
        console.log(isSlideAnimationStarted.isStarted,isSlideAnimationStarted.up)
        if (isSlideAnimationStarted.isStarted){
            if (isSlideAnimationStarted.up){
                setTimeout(() => {
                    setDeltaY(0);
                },1000)
            } else {
                setTimeout(() => {
                    setDeltaY(window.innerHeight);
                },1000)
            }
        }

    }, [isSlideAnimationStarted]);

    useEffect(() => {
        dispatch(reducers.isEntered.setIsEntered(false));
    }, []);
    useEffect(() => {
        if (gameButtonIsClicked === true) {
            function increase() {
                // Change the variable to modify the speed of the number increasing from 0 to (ms)
                let SPEED = 70;
                // Retrieve the percentage value
                let limit = parseInt(document.getElementById("value1").innerHTML != null && document.getElementById("value1").innerHTML, 10);

                for (let i = 0; i <= limit; i++) {
                    setTimeout(function () {
                        document.getElementById("value1").innerHTML != null && (document.getElementById("value1").innerHTML = i + "%");
                    }, SPEED * i);
                }
            }

            increase();
        }
    }, [gameButtonIsClicked]);

    const condition = isSlideAnimationStarted.isStarted ? (isSlideAnimationStarted.up ? "loading-screen-container-up" : "loading-screen-container-down") : "loading-screen-container";

    return (
            <div onWheel={(e) => {
                setDeltaY(deltaY + e.deltaY);
            }} style={{ marginTop: `-${deltaY >= window.innerHeight ? window.innerHeight : deltaY}px` }} className={condition}>
                <div className="bg"></div>

                <div className="clickable slide-animation">
                    <Grid
                        container
                        className="main-grid"
                        square
                        item
                        xs={false}
                        sm={4}
                        md={12}
                        sx={{
                            backgroundImage: `url("${MainLauncherbg}")`,
                            backgroundRepeat: "no-repeat",
                            height: `${deltaY >= window.innerHeight ? 100 : 102}vh`,
                            display: "flex",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <img src={GradientImage} style={{position: "absolute"}} />
                        <div className="loading-screen-logo-container">
                        <div className="loading-screen-logo">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="launcher-user" style={{zIndex: 1}}>
                            <img src={LuncherUser} width={100} height={100} alt="LuncherUser" />
                            <p className="luancher-text">
                            <span style={{opacity: 0.5, fontSize: '1rem',marginTop: '1rem' }}>Kullanıcı Adı</span>  <br /> <br />
                            <span style={{ opacity: "1", marginTop: '1.5rem' }}>RivaDarlin</span>
                            </p>
                        </div>
                            <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                            {gameButtonIsClicked ? <>
                                <div className="chart">
                                    <div id="value1">{gameButtonIsClicked ? "100" : "0%"}</div>
                                    <div className={gameButtonIsClicked ? "animated-bar" : "bar"}></div>
                                </div>
                                </> : <div style={{marginTop: 'calc(100vh - 260px)'}}>

                                </div> }
                            </Grid>
                        </Grid>
                        <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-footer" : "loading-screen-footer"}>
                            <button className="loading-screen-button" onClick={() => setGameButtonIsClicked(true)}>
                                OYNA
                            </button>
                        </div>
                        <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-image-shadow" : "loading-screen-image-shadow"}></div>
                        <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-image" : "loading-screen-image"}>
                            <img src={Launcher}></img>
                            <img src = {SmallImageBackground} style={{position: "absolute", marginLeft: "-240px"}} />
                            <div className={isSlideAnimationStarted.isStarted && !isSlideAnimationStarted.up ? "loading-screen-user-info" : "loading-screen-user-info"}>
                                <p>Riva'da...</p>
                                <span>12655 kişi oynuyor!</span>
                            </div>
                            <div className="copyright">
                                { <p style={{ opacity: "0.20000000298023224" }}>Riva Network ® | Tüm hakları saklıdır.</p> }
                                { <img src={RivaLogo} /> }
                            </div>
                        </div>
                    </Grid>
                </div>

                <div className="second-page-container">
                    <SettingsPage scroll={deltaY} setDeltaY={setDeltaY} />
                </div>
            </div>
    );
};

export default MainLauncher;
