import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Platinum Medical Spa Website</title>
        </Head>
        <header>
            <img src="/assets/web-projects/platinum-splash.png" srcSet="/assets/web-projects/platinum-splash.png 320w, /assets/web-projects/platinum-splash_720.png 720w" alt="Platinum Medical Spa" className="hero-image" />

        </header>
        <section className="ph2 standard" onClick={popPic}>
            <h1 className="copy-header s1 m0 mb1">Platinum Medical Spa</h1>
            <p>This 2008 site was created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a>.  Click on each screenshot to enlarge them.</p>
            <h2 className="s2 blue">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/platinum_home_detail3.png" alt="Home page detail of sidebar" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/platinum_home_detail2.png" alt="Home page detail of coupon section" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/platinum_home_detail1.png" alt="Home page detail of header" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. The masthead features the reflection visual effect that was the must have effect at the time. In this case, I extended the reflection to include the navbar, an original visual design element according to my colleague.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The site features two different layouts including the homepage and a content page with a left sidebar. Navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic4"><img src="/assets/web-projects/platinum_home.png" alt="Staff page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic5 mid"><img src="/assets/web-projects/platinum_services.png" alt="Services page layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">This project was released and the design remained active for about a year before it was replace with a Flash-based site that killed all the SEO value we had built.</p>
            <h2 className="s2 blue">The Development</h2>
            <p className="m0 mb2">My main contribution to the development of the site was the markup and CSS. The site was compliant with the strict XHTML standard (HTML5 was still just a glimmer of hope at this time). My colleague took my front-end code and incorporated it into his custom PHP framework.</p>
            <p>The site feature some classic CSS techniques for creating gradients and box shadows using images since browser support for these properties did not exist yet. The topnav hover changes were managed using the<a href="https://css-tricks.com/css-sprites/"> CSS Sprites</a> technique.</p>

        </section>
    </div>
)
