import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import reducers from "../../redux/slices";
import routes from "../../routes/definitions";
import logo from "../../assets/logo.svg";

import LogoText from "../../assets/riva-text.svg";
import Grid from "@mui/material/Grid";

const Logo = () => (
    <div className="initial-page-logo">
        <div className="initial-logo-container">
            <div className="initial-logo-container">
                <img src={logo} alt="initial-page-logo" className="initial-logo"/>
            </div>
        </div>
    </div>
);

const InitialPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
         if (isComplete) {
//            window.resizeTo(import.meta.env.VITE_MAIN_WIDTH, import.meta.env.VITE_MAIN_HEIGHT);
            dispatch(reducers.isEntered.setIsEntered(true));
            navigate(routes.Animation);
         }
    }, [isComplete]);

    useEffect(() => {
        function increase() {
            // Change the variable to modify the speed of the number increasing from 0 to (ms)
            let SPEED = 70;
            // Retrieve the percentage value
            let limit = parseInt(document.getElementById("value2").innerHTML != null && document.getElementById("value2").innerHTML, 10);

            for (let i = 0; i <= limit; i++) {
                setTimeout(function () {
                    document.getElementById("value2").innerHTML != null && (document.getElementById("value2").innerHTML = "%" + i);
                    if (document.getElementById("value2").innerHTML === "%100") {
                        setIsComplete(true);
                    }
                }, SPEED * i);
            }
        }

        increase();
    });

    return (
        <div className="initial-page-container">
            <Grid container className="installation-page-container">
                <div>
                    <div className="initial-logo-container">
                        <Logo />
                    </div>
                    <div className="initial-logo-container">
                        <div className="initial-container">
                            <div className="initial-loading-text">
                                <p style={{opacity: "0.25"}}>Dosyalar Yükleniyor...</p>
                                <span id="value2">100</span>
                            </div>

                            <div className="initial-chart">
                                <div className="initial-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default InitialPage;
