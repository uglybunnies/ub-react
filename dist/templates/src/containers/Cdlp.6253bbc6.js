webpackJsonp([8],{155:function(e,t,a){"use strict";e.exports=function(e){var t=document.querySelectorAll(".view"),a=t.length>0,s=e.target,l=function(e){e.forEach(function(e){e.classList.contains("view")&&(e.classList.remove("view"),e.removeAttribute("style"))})};if(s.matches(".pop-pic")){var i=window.innerWidth<800,c=s.offsetParent,r=i?"scale(1.8)":"scale(2)";c.matches(".view")&&a?l(t):(a&&l(t),c.classList.add("view"),c.style.zIndex=5,c.style.transform=r)}else l(t)}},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),i=a(12),c=a(155);t.default=function(){return l.default.createElement("div",null,l.default.createElement(i.Head,null,l.default.createElement("title",null,"Ugly Bunnies -- Café de la Paz Website")),l.default.createElement("header",{className:"splash lh0"},l.default.createElement("img",{src:"/assets/web-projects/cdlp-splash.png",alt:"Café de la Paz Website",srcSet:"/assets/web-projects/cdlp-splash.png 320w, /assets/web-projects/cdlp-splash_720.png 720w",className:"hero-image"})),l.default.createElement("section",{className:"ph2 pb2",onClick:c},l.default.createElement("h1",{className:"copy-header s1 mv1"},"Café de la Paz Website"),l.default.createElement("p",null,"This is my first freelance project. Designed in 2004 for Café de la Paz, a restaurant in Berkeley, California. Click on each screenshot to enlarge them."),l.default.createElement("h2",{className:"s2 ruby"},"The Design"),l.default.createElement("div",{className:"project-group"},l.default.createElement("div",{className:"items project-group-item"},l.default.createElement("div",{className:"item pic1 vert right"},l.default.createElement("img",{src:"/assets/web-projects/cdlp_detail3.png",alt:"Detail of the menu page",className:"hero-image pop-pic"})),l.default.createElement("div",{className:"item pic2 right"},l.default.createElement("img",{src:"/assets/web-projects/cdlp_detail2.png",alt:"Detail of the right sidebar",className:"hero-image pop-pic"})),l.default.createElement("div",{className:"item pic3"},l.default.createElement("img",{src:"/assets/web-projects/cdlp_detail1.png",alt:"Detail of the site navigation",className:"hero-image pop-pic"}))),l.default.createElement("div",{className:"items project-group-item copy"},l.default.createElement("p",{className:"m0 mb2"},"The design features a fluid layout suitable for 17-inch monitors which had become the standard at that time. The page is bookended by the curved shapes at the top left and bottom right. The colors were drawn from earth and sand tones."))),l.default.createElement("div",{className:"project-group"},l.default.createElement("div",{className:"items project-group-item copy"},l.default.createElement("p",{className:"m0"},"The site had on primary layout with some content changes appearing in the right sidebar. Curves are incorporated to soften the edges and make the site feel more welcoming. The site naviation uses the same custom typeface that is used for the tagline that is adjacent to the logo.")),l.default.createElement("div",{className:"items project-group-item"},l.default.createElement("div",{className:"item pic6 right"},l.default.createElement("img",{src:"/assets/web-projects/cdlp_detail5.png",alt:"Menu page layout",className:"hero-image pop-pic"})),l.default.createElement("div",{className:"item pic4"},l.default.createElement("img",{src:"/assets/web-projects/cdlp_detail4.png",alt:"Hompage layout",className:"hero-image pop-pic"})))),l.default.createElement("p",{className:"m0 mb2"},"The design remained active for two years when the restaurant owner decided he no longer wanted to pay for regular updates and maintenance and arranged to have someone else do that work. They proceeded to break the design and ended up doing a new design that lasted until the restaraunt closed a couple of years later."),l.default.createElement("h2",{className:"s2 ruby"},"The Development"),l.default.createElement("p",{className:"m0 mb2"},"This site was built in compliance with strict XHTML standards and CSS2 for layout. Images are used to display the custom typeface of the tagline and site navigation items since text replacement techniues were still a few years away from being conceived. JavaScript is used to unobtrusively change the naviation items on hover.")))}}});