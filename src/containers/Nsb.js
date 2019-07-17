import React from 'react'
import { Head } from 'react-static'
//
var popPic = require('js/popPic.js')
export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Ni Sa Bula E-Commerce Site</title>
        </Head>
        <header className="splash lh0">
            <img src="/assets/web-projects/nsb_splash.png" srcSet="/assets/web-projects/nsb_splash.png 320w, /assets/web-projects/nsb-splash_720.png 720w" alt="Adge homepage design" className="hero-image" />
        </header>
        <section className="project ph2 pb2" onClick={popPic}>
            <h1 className="copy-header s1 mv1">Ni Sa Bula E-Commerce Site</h1>
            <p>This is an e-commerce site that I single-handedly designed and developed in 2008 using the <a href="https://www.zen-cart.com/">Zen Cart</a> e-commerce solution. Click on each screenshot to enlarge them.</p>
            <h2  className="s2 ruby">The Design</h2>
            <div className="project-group">
                <div className="items project-group-item">
                    <div className="item pic1 vert right"><img src="/assets/web-projects/nsb_detail3.png" alt="Detail of the product details page" className="hero-image pop-pic"/></div>
                    <div className="item pic2 right"><img src="/assets/web-projects/nsb_detail2.png" alt="Home page detail of other featured products" className="hero-image pop-pic"/></div>
                    <div className="item pic3"><img src="/assets/web-projects/nsb_detail1.png" alt="Home page detail the featured product" className="hero-image pop-pic"/></div>
                </div>
                <div className="project-group-item copy">
                    <p className="m0 mb2">This site was designed primarily for desktop users as mobile use was still limited. The site features a 4-column grid-based design. The homepage design includes a "hero" product and four more featured products that could be changed using the Zen Cart admin tools. Larger versions of the product images on the product detail page could be viewed in modal experience by clicking on the magnifying glass situated below the image.</p>
                </div>
            </div>
            <div className="project-group mb2">
                <div className="project-group-item copy">
                    <p className="m0 mb2">The design features two basic layouts; the homepage and the content layout page with a right sidebar that was used for product details and search result listings. Navigation on underlying pages was provided by a topnav bar listing product categories. A Fijian paper fabic pattern was used as a background tile as a tribute to the proprietor’s heritage. The color palette features earthtones accompanied by a red hue that was extracted from the logo for accents, and a blue hue for links.</p>
                </div>
                <div className="items project-group-item">
                    <div className="item pic4"><img src="/assets/web-projects/nsb_detail4.png" alt="Services page layout" className="hero-image pop-pic"/></div>
                    <div className="item pic5 mid"><img src="/assets/web-projects/nsb_detail5.png" alt="Homepage layout" className="hero-image pop-pic"/></div>
                    <div className="item pic6 right"><img src="/assets/web-projects/nsb_detail6.png" alt="Search Results layout" className="hero-image pop-pic"/></div>
                </div>
            </div>
            <p className="m0 mb2">This project was successfully launched and stayed in production for two years. It was eventually taken on by another developer who moved it to Shopify after some unfortunate edits broke the template I had provided. </p>
            <h2  className="s2 ruby">The Development</h2>
            <p className="m0 mb2">This project was built with the <a href="https://www.zen-cart.com/">Zen Cart</a> e-commerce application which is written in PHP and accompanied by a MySQL database. The template is a modified version of the base template that comes with the Zen Cart system. Standards-compliant CSS controls the layout and styling. Custom JavaScript was used to create and launch the larger product image on the detail page.</p>

        </section>
    </div>
)
