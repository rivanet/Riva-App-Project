import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import Grid from "@mui/material/Grid";
import logo from "../../assets/riva.svg";

const Logo = () => (
    <div className="installation-page-logo">
        <img src={logo} alt="installation-page-logo" />
    </div>
);

const InstallationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="installation-container">
            <Grid container className="installation-page-container">
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <p className="big-text">
                        MÜKEMMEL <br />
                        OYUN <br />
                        DENEYIMI
                    </p>
                    <p className="small-text">
                        Riva'nın hızlı ve eşsiz launcher'i ile <br />
                        maceraya atıl!
                    </p>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <button
                        className="installation-page-button clickable"
                        onClick={() => {
                            navigate(routes.InitialPage);
                        }}
                    >
                        INDIR
                    </button>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <Grid className="installation-footer">
                        <Grid>
                            <Logo />
                        </Grid>

                        <div className="installation-copyright">
                            <p style={{ opacity: "0.20000000298023224" }}>RIVA LAUNCHER ® 2022</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default InstallationPage;
