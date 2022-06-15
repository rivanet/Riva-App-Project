import React,{useState} from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import LauncherSettingsRight from "./SettingsPageRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { SocialIcon } from "react-social-icons";
import NavBar from "../common/NavBar";



const LauncherSettings = ({setDeltaY, scroll}) => {
    const clickSignUpSocialLink = (url) => {
        console.log(url);
//        let shell = require('electron').shell     
//            shell.openExternal(url)
        document.removeEventListener('click', function (event) {
            event.preventDefault();
        })
    }
    //console.log(scroll)
    return (
        <div className="settings-container">
            <Grid container className="clickable">
                <Grid item xs={12} md={12} lg={12}>
                    <NavBar setDeltaY={setDeltaY} scroll={scroll} className="settings-navbar-container" />
                </Grid>
            </Grid>

            
            <Grid container spacing={2} className="launcher-container clickable">
                <Grid item style={{width: "49%"}}>
                    <h2 className="">HAKKINDA</h2>
                    <p  className="setting-heading1">Riva Network®, sayısız oyun moduna sahip, oynaması ücretsiz bir Minecraft sunucusudur. RivaNetwork'de yeni arkadaşlıklar kurabilir, kendi ekibini oluşturabilir ve Riva Launcher ile normal Minecraft deneyiminin üstünde gününü bir solukta bitirebileceğin mükemmel bir oyun deneyimi yaşayabilirsin.</p>
                    <Grid item xs={12} sm={12} md={12} lg={12} className="social-medi-text">
                        <p  className="setting-heading1"> Sosyal Medya </p>
                    </Grid>
                    <div className="settings-social-media">
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <ul className="settings-social-media-grid">
                                <li onClick={(e) => {e.preventDefault();clickSignUpSocialLink("https://t.me/rivanetwork");}} className="clickable">
                                            {" "}
                                            <SocialIcon url="https://www.telegram.com/rivanetwork/" style={{ height: "24px", width: "24px", cursor: "pointer" }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li onClick={(e) => {e.preventDefault();clickSignUpSocialLink("https://www.tiktok.com/@rivanetwork");}} className="clickable">
                                            <SocialIcon url="https://www.tiktok.com/@rivanetwork" style={{ height: "24px", width: "24px", cursor: "pointer" }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li onClick={(e) => {e.preventDefault();clickSignUpSocialLink("https://www.instagram.com/rivanetwork/");}} className="clickable">
                                            <SocialIcon url="https://www.instagram.com/rivanetwork/" style={{ height: "24px", width: "24px", cursor: "pointer" }} />
                                        </li>
                                        <div className="social-icon-bar"> </div>
                                        <li onClick={(e) => {e.preventDefault();clickSignUpSocialLink("https://discord.gg/FFyx7nVgJj");}} className="clickable">
                                            <SocialIcon url="https://discord.gg/FFyx7nVgJj" style={{ height: "24px", width: "24px", cursor: "pointer" }} />
                                        </li>
                                        <div className="social-icon-bar"></div>
                                        <li onClick={(e) => {e.preventDefault();clickSignUpSocialLink("https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg");}} className="clickable">
                                            <SocialIcon url="https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg" style={{ height: "24px", width: "24px", cursor: "pointer" }} />
                                        </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                    <hr style={{width :"0px", height: "450px", border: "1px solid rgba(255,255,255,0.25)", marginLeft: "-7px"}} />
                <Grid item style={{width: "49%"}}>
                    <div className="launcher-container-right">
                        <LauncherSettingsRight />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default LauncherSettings;
