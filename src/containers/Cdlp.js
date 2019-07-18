import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Caf&eacute; de la Paz Website</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/cdlp-splash.png" alt="Caf&eacute; de la Paz Website" srcSet="/assets/web-projects/cdlp-splash.png 320w, /assets/web-projects/cdlp-splash_720.png 720w" className="hero-image" />
        </header>
        <section className="project ph2 pb2" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Caf&eacute; de la Paz Website</h1>
            <p>This is my first freelance project. Designed in 2004 for Caf&eacute; de la Paz, a restaurant in Berkeley, California. Click on each screenshot to enlarge them.</p>
            <h2  className="s2 ruby">The Design</h2>

            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/cdlp_detail3.png" alt="Detail of the menu page" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/cdlp_detail2.png" alt="Detail of the right sidebar" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/cdlp_detail1.png" alt="Detail of the site navigation" className="hero-image pop-pic"/></div>
                </div>
                <div className="items project-group-item copy">
                    <p className="m0 mb2">
                        The design features a fluid layout suitable for 17-inch monitors which had become the standard at that time. The page is bookended by the curved shapes at the top left and bottom right. The colors were drawn from earth and sand tones.
                    </p>
                </div>
            </div>
            <div className="project-group">
                <div className="items project-group-item copy">
                    <p className="m0">The site had on primary layout with some content changes appearing in the right sidebar. Curves are incorporated to soften the edges and make the site feel more welcoming. The site naviation uses the same custom typeface that is used for the tagline that is adjacent to the logo.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic6 right">
                        <img src="/assets/web-projects/cdlp_detail5.png" alt="Menu page layout" className="hero-image pop-pic"/>
                    </div>
                    <div className="item pic4">
                        <img src="/assets/web-projects/cdlp_detail4.png" alt="Hompage layout" className="hero-image pop-pic"/>
                    </div>
                </div>
            </div>
            <p className="m0 mb2">The design remained active for two years when the restaurant owner decided he no longer wanted to pay for regular updates and maintenance and arranged to have someone else do that work. They proceeded to break the design and ended up doing a new design that lasted until the restaraunt closed a couple of years later.</p>

            <h2  className="s2 ruby">The Development</h2>
            <p className="m0 mb2">This site was built in compliance with strict XHTML standards and CSS2 for layout. Images are used to display the custom typeface of the tagline and site navigation items since text replacement techniues were still a few years away from being conceived. JavaScript is used to unobtrusively change the naviation items on hover.</p>
        </section>
    </div>
)
