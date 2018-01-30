import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Template Design for Sandvox</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/UF-splash.png" alt="Template Design for Sandvox" srcSet="/assets/web-projects/UF-splash.png 320w, /assets/web-projects/UF-splash_720.png 720w" className="hero-image" />
        </header>
        <section className="ph2 pb2" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Template Design for Sandvox</h1>
            <p><a href="http://www.karelia.com/products/sandvox/">Sandvox</a> is a website building tool for Macs. This a the Urban Forest template I designed for them in 2005. Click on each screenshot to enlarge them.</p>
            <h2  className="s2 ruby">The Design</h2>

            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/UF_detail2.png" alt="Detail of the rendered template" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/UF_detail3.png" alt="Detail of the photo Navigation" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/UF_detail1.png" alt="Detail of the rendered template" className="hero-image pop-pic"/></div>
                </div>
                <div className="items project-group-item copy">
                    <p className="m0 mb2">
                        The design features a fixed-width layout suitable for 17-inch monitors which had become the standard at that time. The masthead features a multi-layered background that was designed to accommodate a variable height depending on the content placed within it. Other details include image galler pagination controls designed to look like leaves.
                    </p>
                </div>
            </div>
            <div className="project-group">
                <div className="items project-group-item copy">
                    <p className="m0">The template had to support a number of layouts including a homepage, blog post page and a Flash-powered image viewer. The template also needed to accommodate a sidebar on the left and/or right side.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic6 right">
                        <img src="/assets/web-projects/UF_detail6.png" alt="Example site using the template" className="hero-image pop-pic"/>
                    </div>
                    <div className="item pic5 mid">
                        <img src="/assets/web-projects/UF_detail5.png" alt="Example site using the template" className="hero-image pop-pic"/>
                    </div>
                    <div className="item pic4">
                        <img src="/assets/web-projects/UF_detail4.png" alt="Example of the pagination controls on a page" className="hero-image pop-pic"/>
                    </div>
                </div>
            </div>
            <p className="m0 mb2">This design has proven to be the most enduring design I have done. The design is still used in production by several websites (including <a href="http://www.todayinthegarden.com/">this one</a> and <a href="http://luckydogcambridge.com/">this one</a> for example).</p>
            <h2  className="s2 ruby">The Development</h2>
            <p className="m0 mb2">My main contribution to the template was my CSS code. The client wanted to create a framework that was inspired by the <a href="http://www.csszengarden.com/">CSS Zen Garden</a> so that new designs could be easily incorporated into the system without requiring new markup or a separate code base.</p>
        </section>
    </div>
)
