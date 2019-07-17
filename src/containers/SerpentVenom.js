import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- SerpentVenom Website</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/sv-splash.png" srcSet="/assets/web-projects/sv-splash.png 320w, /assets/web-projects/sv-splash_720.png 720w" alt="SerpentVenom Spa" className="hero-image" />
        </header>
        <section className="project ph2 pb2 spec-sv" onClick={popPic}>
            <h1 className="copy-header s1 mv1">SerpentVenom</h1>
            <p>This 2009 design is the third version of my former website, SerpentVenom. SerpentVenom featured my art and design portfolios as well as my blog and some articles I had written. I retired the site when I realized I had not updated the blog in over a year.</p>
            <h2  className="s2 ruby">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 right"><img src="/assets/web-projects/sv_detail3.png" alt="Project screenshot gallery" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/sv_detail2.png" alt="Project page detail" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/sv_detail1.png" alt="Home page detail of masthead" className="hero-image pop-pic"/></div>
                    <div className="item pic4"><img src="/assets/web-projects/sv_detail4.png" alt="Project gallery lightbox" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">SerpentVenom was originally designed for desktop only and was eventually converted to be responsive in order to support mobile devices like phones and tablets. Color is used to distinguish one type of content from another; blue for web projects, green for art projects and yellow for blog posts and articles. The color palette is drawn first from the blue of the logo. Shades and tints were created by adjusting the HSB values in PhotoShop. Green and yellow hues were selected using similar saturation and blackness values as the main blue color.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The layout of the homepage is built upon repeated use of the golden ratio. The golden ratio also influences other page layouts such as the project pages, blog post pages, blog archive pages, and article pages.</p>
                    <p className="m0 mb2">Project pages featured a unique UI to control what aspect of the project was featured such as Design, Development and a project gallery that displayed images using my custom lightbox script.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic5"><img src="/assets/web-projects/sv_detail5.png" alt="Homepage layout" className="hero-image pop-pic"/></div>
                    <div className="item pic6"><img src="/assets/web-projects/sv_detail8.png" alt="Homepage tablet layout" className="hero-image pop-pic"/></div>
                    <div className="item pic7 right"><img src="/assets/web-projects/sv_detail7.png" alt="Blog page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic8 right"><img src="/assets/web-projects/sv_detail6.png" alt="Project page layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">This incarnation of SerpentVenom stayed in production for nearly 7 years. While I was sad to see it go, I felt that a change was in order and so I rebranded to use Ugly Bunnies.</p>
            <h2  className="s2 ruby">The Development</h2>
            <p className="m0 mb2">SerpentVenom was powered by Wordpress using a custom theme that I developed from scratch. The markup is HTML5 compliant. Layouts, gradients and transitions are all provided by CSS. The Project Viewer and Lightbox are written in vanilla JavaScript.</p>
            <p className="m0 mb2">Responsive design is achieved using CSS media queries. Flexbox was used to change the layout order for small screen devices.</p>

        </section>
    </div>
)
