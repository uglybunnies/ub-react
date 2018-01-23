import React from 'react'
import { Head } from 'react-static'

export default () => (
    <div>
        <Head>
            <title>Welcome to Ugly Bunnies by Michael Wong</title>
        </Head>
        <header className="pa2">
            <h1 className="brand m0">Welcome to Ugly Bunnies</h1>
            <p>If you were expecting to see ugly bunnies here, you will have to look elsewhere (<a href="http://uglybunnies.tumblr.com/">here</a>, perhaps). Ugly Bunnies is the website of Michael Wong. Michael is a Conceptual Information Artist who works as a Web Design and Development Professional in the San Francisco Bay Area. This site features some <a href="/web-projects">projects</a> completed over the years.</p>
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
