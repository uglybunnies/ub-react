import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Flash-Based Webcast</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/nsb_splash.png" srcSet="/assets/web-projects/nsb_splash.png 320w, /assets/web-projects/nsb-splash_720.png 720w" alt="Denali Software Flash-Based Webcast" className="hero-image" />
        </header>
        <section className="ph2 pb2" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Denali Software Flash-Based Webcast</h1>

        </section>
    </div>
)
