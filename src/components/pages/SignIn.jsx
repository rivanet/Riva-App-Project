import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "@mui/material/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Launcher1 from "../../assets/launcher-1.svg";
import logo from "../../assets/RIVA_NETWORK_TEXT.png";
// import logo2 from "/RIVA_NETWORK.png";
import logo2 from "../../assets/logo.svg";

import { withStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import reducers from "../../redux/slices";
import SıngInLogo from "../../assets/SignInLogo.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SocialMedia from "../../assets/Group 260.svg";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { rivaAuthLogin } from "../../services/AuthService";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomColorCheckbox = withStyles({
    root: {
        color: "#fff",
        "&$checked": {
            color: "#fff",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const WhiteBorderTextField = styled(Input)`
    & label.Mui{
        color: #fff !important;
    }
    & label.Mui-focused {
        color: white ;
    }

    & .MuiOutlinedInput-root {
        background-color: rgba(255, 255, 255, 0.029999999329447746);
        &.Mui-focused fieldset {
            color: white;
            border-color: white;
        }
    }
`;

const App = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChange = (event) => {
        setChecked(event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const clickSocialLink = (url) => {
        console.log(url);
//        let shell = require('electron').shell     
//            shell.openExternal(url)
        document.removeEventListener('click', function (event) {
            event.preventDefault();
        })
    }

    const clickSignIn = async () => {
        const result = await rivaAuthLogin(userName, password);
        if(result.result) {
            dispatch(reducers.isSignIn.setIsSignIn(true));
            dispatch(reducers.animationRoute.setAnimationRoute(routes.LoadingScreen));
            dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({ isStarted: false, up: false }));
            navigate(routes.Animation);
        } else {
            toast.error(result.error, {autoClose:15000})
        }
    }

    return (
        <div className="clickable">
            <div className="bg"></div>
            <div className="animation-bar">
                <div className="animation-logo-image">
                    <img src={logo2} />
                </div>
            </div>
            <Grid container className="main-grid" sx={{ height: "100vh", width: "120vw !important", minWidth: "1650px !important", position: "fixed" }}>
                <CssBaseline />
                <Grid
                    item
                    sx={{
                        backgroundColor: "#10171f",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    sm={5}
                    md={3}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#fff",
                            justifyContent: "space-around",
                            height: "calc(100% - 128px)"
                        }}
                    >
                        <div className="signin-header">
                            <img src={logo} />
                        </div>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: "100%" }} className="clickable">
                            <h2 className="login-heading">Giriş yap</h2>
                            <WhiteBorderTextField inputProps={{style:{marginLeft: "10px"}}} className="signin-input" margin="normal" required fullWidth id="userName" placeholder="Kullanıcı Adı" name="userName" autoComplete="userName" autoFocus onChange={(e)=>setUserName(e.target.value)} />
                            <WhiteBorderTextField inputProps={{style:{marginLeft: "10px"}}} className="signin-input" margin="normal" required fullWidth name="password" placeholder="Şifre" type="password" id="password" autoComplete="current-password" onChange={(e)=>setPassword(e.target.value)} />
                            <Grid container sx={{ marginTop: "10px"}}>
                                <div className="signin-letter-footer">
                                    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => handleChange(!checked)} className="clickable">
                                        <CustomColorCheckbox checked={checked} icon={<RadioButtonUncheckedIcon style={{ height: "15px", width: "15px", marginLeft: "-9px" }} />} checkedIcon={<RadioButtonCheckedIcon style={{ height: "15px", width: "15px", marginLeft: "-9px" }} />} label="Beni Hatırla" />
                                        <div className="login-bottom1">Beni hatırla</div>
                                    </div>
                                    <div className="login-bottom1" style={{marginTop:"5px", cursor: "pointer"}} onClick={(e) => {e.preventDefault();clickSocialLink("https://rivanetwork.com.tr/sifremi-unuttum");}}>Şifremi Unuttum</div>
                                </div>
                            </Grid>

                            <div
                                className="signin-button"
                                onClick={() => {
                                    clickSignIn()
                                }}
                            >
                                <ArrowForwardIosIcon sx={{ color: "rgba(#000,0.2) !important",
                                 border: "5px solid white", opacity: "0.20000000298023224", cursor: "pointer",
                                 padding: "15px", borderRadius: "50px", height: "80px", width: "80px" }} />
                            </div>

                        </Box>
                        <div className="signin-footer">
                            <div className="signin-footer-text">
                                <h6 className="sign-footer-bottom" style={{ marginBottom: '-10px'}}>Bir hesabın yok mu? Dert etme!</h6>
                                <h6 onClick={() => navigate(routes.CreateNewAccount)} className="clickable signin-footer-bottom-right"  
                                style={{
                                    cursor: "pointer"
                                 }}>
                                    Yeni hesap oluştur
                                </h6>
                            </div>

                            <div className="signin-social-media">
                                <Grid container>
                                    {/* <img src={SocialMedia} /> */}
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <ul className="social-media-grid">
                                            <li onClick={(e) => {e.preventDefault();clickSocialLink("https://t.me/rivanetwork");}}>
                                                {" "}
                                                <SocialIcon url="https://www.telegram.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"></div>
                                            <li onClick={(e) => {e.preventDefault();clickSocialLink("https://www.tiktok.com/@rivanetwork");}}>
                                                <SocialIcon url="https://www.tiktok.com/@rivanetwork" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"></div>
                                            <li onClick={(e) => {e.preventDefault();clickSocialLink("https://www.instagram.com/rivanetwork/");}}>
                                                <SocialIcon url="https://www.instagram.com/rivanetwork/" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"> </div>
                                            <li onClick={(e) => {e.preventDefault();clickSocialLink("https://discord.gg/FFyx7nVgJj");}}>
                                                <SocialIcon url="https://discord.gg/FFyx7nVgJj" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                            <div className="social-icon-bar"></div>
                                            <li onClick={(e) => {e.preventDefault();clickSocialLink("https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg");}}>
                                                <SocialIcon url="https://www.youtube.com/channel/UCFTJ0JmTSqXz_dEoRuolhMg" style={{ height: "24px", width: "24px", marginLeft: "19px", cursor: "pointer" }} />
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={8}
                    sx={{
                        backgroundImage: `url("${Launcher1}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </Grid>
            <ToastContainer />
        </div>
    );
};
export default App;
