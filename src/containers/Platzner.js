import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Proposed Platzner &amp; Co. Website</title>
        </Head>
        <header>
            <img src="/assets/web-projects/platzner-splash.png" srcSet="/assets/web-projects/platzner-splash.png 320w, /assets/web-projects/platzner-splash_720.png 720w" alt="Proposed Platzner &amp; Co. Website" className="hero-image"/>
        </header>
        <section className="ph2 standard" onClick={popPic}>
            <h1 className="copy-header s1 m0 mb1">Proposed Platzner &amp; Co. Website</h1>
            <p>This is the design of a website for a small consultancy that I did in 2008. The client chose to go in a different direction and paid for services rendered. Click on each screenshot to enlarge them.</p>
            <h2 className="s2 blue">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/platzner_detail3.png" alt="Home page detail of sidebar" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/platzner_detail2.png" alt="Home page detail of blog excerpts" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/platzner_detail1.png" alt="Home page detail of the masthead" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This design is inspired by the Art Deco movement as requested by the client. Some details include custom bullets for lists, custom horizontal rules for sections, and a custom pattern to create a wallpaper background.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The site was to feature three different layouts including the homepage, a content page with a left sidebar and a blog post page with a right sidebar. I designed all visual elements of the site including the logo, masthead background, custom bullets and the custom horizontal rules.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic4"><img src="/assets/web-projects/platznerBlogMockup.png" alt="Blog post page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic5 mid"><img src="/assets/web-projects/platznerContentMockup.png" alt="Content page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic6 right"><img src="/assets/web-projects/platznerHomeMockup.png" alt="Home page layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">The client chose to walk away rather than accept the design. Their feedback was that the site looked too "techy".</p>
        </section>
    </div>
)
