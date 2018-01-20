import React from 'react'
import { Head } from 'react-static'
//

export default () => (
    <div>
        <Head>
            <title>Ugly Bunnies -- Web Projects by Michael Wong</title>
        </Head>
        <header className="ph1">
            <h1 className="copy-header s1 m0 mb1">Web Projects</h1>
            <p>This is a collection of some of my web-based work including websites and interactive experiences.</p>
        </header>
        <section className="ph1">
            <header>
                <h2 className="s2 blue">Websites</h2>
            </header>
            <div className="group">
                <article className="group-item">
                    <header className="relative">
                        <img src="assets/web-projects/platinum_hero_320.png" alt="Platinum Medical Spa" srcSet="assets/web-projects/platinum_hero.png 1024w" className="hero-image" />
                        <h3 className="s5 ph m0 absolute"><span className="absolute"><a href="/web-projects/platinum-site" className="blocks">Platinum Medical Spa Website</a></span></h3>
                    </header>
                    <div className="excerpt pa1 mb2">
                        <p className="m0 mb">This site was created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a>. <a href="/web-projects/platinum-site" className="db tar mv goto">Learn more &#187;</a></p>
                    </div>
                </article>
                <article className="group-item m0">
                    <header className="relative">
                        <img src="assets/web-projects/rjm_hero_320.png" alt="Rejuvenation Medi-Spas" srcSet="assets/web-projects/rjm_hero.png 1024w" className="hero-image" />
                        <h3 className="s5 ph m0 absolute"><span className="absolute"><a href="/web-projects/rejuvenation-site" className="blocks">Rejuvenation Medi-Spas Website</a></span></h3>
                    </header>
                    <div className="excerpt pa1 mb2">
                        <p className="m0 mb">This site was also created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a>. <a href="/web-projects/rejuvenation-site" className="db tar mv goto">Learn more &#187;</a></p>
                    </div>
                </article>
                <article className="group-item m0">
                    <header className="relative">
                        <h3 className="s5 ph m0 absolute"><span className="absolute"><a href="/web-projects/erran-andrews" className="blocks">Erran Andrews Hair Design Website</a></span></h3>
                        <img src="assets/web-projects/erranAndrews_hero_320.png" alt="Erran Andrews" srcSet="assets/web-projects/erranAndrews_hero.png 1024w" className="hero-image" />
                    </header>
                    <div className="excerpt pa1 mb2">
                        <p className="m0 mb">This is a portfolio site designed to promote the hair design work of Erran Andrews. <a href="/web-projects/erran-andrews" className="db tar mv goto">Learn more &#187;</a></p>
                    </div>
                </article>
                <article className="group-item m0">
                    <header className="relative">
                        <img src="assets/web-projects/Platzner-Hero_320.png" alt="Platzner & Co." srcSet="assets/web-projects/Platzner-Hero.png 1024w" className="hero-image" />
                        <h3 className="s5 ph m0 absolute"><span className="absolute">
                            <a href="/web-projects/platzner" className="blocks">Platzner &amp; Co. Website</a>
                        </span></h3>
                    </header>
                    <div className="excerpt pa1 mb2">
                        <p className="m0 mb">This is the proposed design of a website for a small consultancy. <a href="/web-projects/platzner" className="db tar mv goto">Learn more &#187;</a></p>
                    </div>
                </article>
            </div>
        </section>

    </div>
)
