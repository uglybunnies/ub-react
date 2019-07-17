import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Rejuvenation Medi-Spas Website</title>
        </Head>
        <header className="splash lh0"><img src="/assets/web-projects/rjm-splash.png" srcSet="/assets/web-projects/rjm-splash.png 320w, /assets/web-projects/rjm-splash_720.png 720w" alt="Rejuvenation Medi-Spas" className="hero-image" /></header>
        <section className="project ph2 pb2 spec-rjm" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Rejuvenation Medi-Spas</h1>
            <p>This 2009 site was also created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a>. The site was never published because the client <a href="https://youtu.be/jVkLVRt6c1U">could not pay</a> after his partners refused to go forward.  Click on each screenshot to enlarge them.</p>
            <h2  className="s2 ruby">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/rjm_home_detail3.png" alt="Home page detail of sidebar" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/rjm_home_detail4.png" alt="Top navigation detail" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/rjm_home_detail1.png" alt="Home page detail of the masthead" className="hero-image pop-pic"/></div>
                    <div className="item pic7"><img src="/assets/web-projects/rjm_home_detail2.png" alt="Home page detail of coupon section" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. It features a distinctive visual style that incorporates layers of semi-opaque shapes overlaid onto each other to create a sense of depth and movement.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The site features three different layouts including the homepage, a content page with a left sidebar and a content page with no sidebars. Navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic4"><img src="/assets/web-projects/RJM_staff.png" alt="Staff page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic5 mid"><img src="/assets/web-projects/RJM_services.png" alt="Services page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic6 right"><img src="/assets/web-projects/RJM_home.png" alt="Home page layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">This project is the the last bit of unpaid "spec work" I have done. Lesson learned, I no longer do projects on spec as a result.</p>

        </section>
    </div>
)
