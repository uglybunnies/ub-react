import React from 'react'
import { Head } from 'react-static'

export default () => (
    <div>
        <Head>
            <title>Welcome to Ugly Bunnies by Michael Wong</title>
        </Head>
        <header className="pa2 home-splash">
            <img src="/assets/home-splash-sv.png" alt="SerpentVenom" className="splash-sv" />
            <img src="/assets/home-splash-adge.png" alt="Adge" className="splash-adge" />
            <img src="/assets/home-splash-rjm.png" alt="Rejuvenation Medi-Spas" className="splash-rjm" />
            <h1 className="brand m0 mb pt ">Welcome to Ugly Bunnies<sup>*</sup></h1>
            <p className="white s5"> Ugly Bunnies is run by Michael Wong, a Conceptual Information Artist and Web Professional who crafts <a href="/web-projects" className="light"><strong>engaging web-based experiences</strong></a> in the San Francisco Bay Area.</p>
            <p className="note white m0">
                <strong>*</strong> If you are disappointed in not finding ugly bunnies here, perhaps you can seek them <a href="http://uglybunnies.tumblr.com/" className="light">here</a>.
            </p>
        </header>
        <section className="p0 ph2 pb2">
            <ul className="inline-list m0 p0 social-accounts tac">
                <li>
                    <a href="https://www.linkedin.com/in/uglybunnies/" className="soc-links">
                        <i className="icon-linkedin-squared"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/uglybunnies" className="soc-links">
                        <i className="icon-github-circled"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/NoUglyBunnies" className="soc-links">
                        <i className="icon-twitter"></i>
                    </a>
                </li>
            </ul>
        </section>

    </div>
)
