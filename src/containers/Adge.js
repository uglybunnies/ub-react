import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Adge Website Design</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/adge-splash.png" srcSet="/assets/web-projects/platinum-splash.png 320w, /assets/web-projects/adge-splash_720.png 720w" alt="Adge homepage design" className="hero-image" />
        </header>
        <section className="ph2 pb2" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Adge IT Consultants</h1>
            <p>This 2007 project ended up being my first experience with spec work. These comps were produced in the hope that they would seal the deal in getting my contract signed. Unfortunately, the client chose to go in another direction and walked away. Click on each screenshot to enlarge them.</p>
            <h2  className="s2 ruby">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/adge_detail7.png" alt="Home page detail of matrix and right sidebar" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/adge_detail3.png" alt="Home page detail of the right side of the masthead" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/adge_detail2.png" alt="Home page detail of header" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This design predates smart mobile devices and was designed to work best with 17-inch monitors. The homepage featured a matrix of services that "lit up" when the user moused over each service. The user could see more information about each service by clicking on the particular service.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The design features two different layouts including the homepage and a content page with a right sidebar. The main navigation element is the global site navigation in the form of a horizontal bar featuring color changes on hover.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic4"><img src="/assets/web-projects/adge_detail5.png" alt="Services page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic5 right"><img src="/assets/web-projects/adge_detail4.png" alt="Homepage layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">This project did not proceed past the mock designs seen here. The lesson learned here is that spec work does not ensure that you will get the gig. Always make sure you have a signed contract in hand before any work is done.</p>

        </section>
    </div>
)
