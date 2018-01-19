import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Erran Andrews Hair Design</title>
        </Head>
        <header>
            <img src="/assets/web-projects/erran-splash.png" alt="Erran Andrews Hair Design" srcSet="/assets/web-projects/erran-splash.png 320w, /assets/web-projects/erran-splash_720.png 720w" className="hero-image" />
        </header>
        <section className="ph2 spec-ea" onClick={popPic}>
            <h1 className="copy-header s1 m0 mb1">Erran Andrews Hair Design</h1>
            <p>This is a portfolio site designed to promote the hair design work of Erran Andrews, a San Francisco-based hairstylist. Click on each screenshot to enlarge them.</p>
            <h2 className="s2 blue">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic4 right"><img src="/assets/web-projects/erran_detail4.png" alt="Detail of the style gallery for men" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/erran_detail3.png" alt="Detail of the style gallery for women" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/erran_detail2.png" alt="Detail of the photo lightbox" className="hero-image pop-pic"/></div>
                    <div className="item pic1"><img src="/assets/web-projects/erran_detail1.png" alt="Detail of the topnav" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. This design emphasizes the images that appear in the wide column on the right while copy is featured in the narrow column on the left.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The site features six pages using the same layout. The style gallery features a tab interface that allows the user to switch between styles for women and men. The portfolio featured my original implementation of a gallery lightbox. The home page featured a Flash-based slideshow because Flash was everywhere and well-suited for this feature.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic7 right">
                        <img src="/assets/web-projects/erran_contact.png" alt="Contact Page" className="hero-image pop-pic"/>
                    </div>
                    <div className="item pic6 mid">
                        <img src="/assets/web-projects/erran_about.png" alt="About Page" className="hero-image pop-pic" />
                    </div>
                    <div className="item pic5">
                        <img src="/assets/web-projects/erran_home.png" alt="Home Page" className="hero-image pop-pic"/>
                    </div>
                </div>
            </div>
            <p className="m0 mb2">The site launched in 2008 but disappeared after the site hosting and domain registration expired the next year.</p>
            <h2 className="s2 blue">The Development</h2>
            <p className="m0 mb2">The site was built in compliance with strict XHTML standards and what was then state-of-the-art CSS2 for layout and visual embellishments including <a href="https://css-tricks.com/css-sprites/">CSS Sprites</a> and image-base gradients. The Flash slideshow is loaded dynamically using JavaScript so that users would see a static image if Flash was not available. </p>
        </section>
    </div>
)
