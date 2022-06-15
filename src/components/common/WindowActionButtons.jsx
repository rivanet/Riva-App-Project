//import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";

export const WindowActionButtons = ({ minimize, setOpen }) => {
    const { pathname } = useLocation();
    
    console.log({ pathname })
    return (
        <>
        {
            pathname === "/signin" ?
            <>
                <div id="minimize" onClick={() => minimize()}>
                    <MinimizeIcon className="minimize-icon" />
                </div>
                <div id="close" className="clickable" onClick={() => setOpen(true)}>
                    <span>
                        <CloseIcon className="close-icon" />
                    </span>
                </div>
            </>
            :
                pathname === "/create-new-account" ?
                <>
                    <div id="minimize" onClick={() => minimize()}>
                        <MinimizeIcon className="minimize-icon" />
                    </div>
                    <div id="close" className="clickable" onClick={() => setOpen(true)}>
                        <span>
                            <CloseIcon className="close-icon" />
                        </span>
                    </div>
                </>
                : 
                pathname === "/loading-screen" ?
                <>
                    <div id="minimize" onClick={() => minimize()}>
                        <MinimizeIcon className="minimize-icon" />
                    </div>
                    <div id="close" className="clickable" onClick={() => setOpen(true)}>
                        <span>
                            <CloseIcon className="close-icon" />
                        </span>
                    </div>
                </>
                :
                pathname === "/animation" ?
                <>
                    <div id="minimize" onClick={() => minimize()}>
                        <MinimizeIcon className="minimize-icon" />
                    </div>
                    <div id="close" className="clickable" onClick={() => setOpen(true)}>
                        <span>
                            <CloseIcon className="close-icon" />
                        </span>
                    </div>
                </>
                :
                null
        }
            
        </>
    );
}