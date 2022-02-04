import React from "react";
import {IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import AboutLogo from './22431226.jpg'
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 >AboutMe</h2>
            <div className="about-logo">
                <img src={AboutLogo} alt=""/>
            </div>

            <div className='social-list'>
                <IconButton href="https://github.com/KHTTakuya" target="_blank">
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://twitter.com/altopo_khnode" target="_blank">
                    <TwitterIcon color="primary" />
                </IconButton>
            </div>
            <div>
                <p>タカハシタクヤと申します。 <br/>
                    プログラミングで躓いたところやtipsなどを備忘録として付けていきます。
                    若輩者ですがよろしくお願いします。<br/>
                    こちらのブログはバックエンドにDRFフロントエンドにReact.jsで開発しています。<br/>
                    <a href="https://eleva-guatemala.com/">ホームページはこちらから</a><br/>
                    お問い合わせは:<br/>altopo424@gmail.com</p>
            </div>
        </div>
    );
}