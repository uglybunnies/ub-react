
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_containers_Home from '../src/containers/Home'
import src_containers_About from '../src/containers/About'
import src_containers_WebProjects from '../src/containers/WebProjects'
import src_containers_Rjm from '../src/containers/Rjm'
import src_containers_Platinum from '../src/containers/Platinum'
import src_containers_ErranAndrews_js from '../src/containers/ErranAndrews.js'
import src_containers_Platzner_js from '../src/containers/Platzner.js'
import src_containers_UrbanForest_js from '../src/containers/UrbanForest.js'
import src_containers_Cdlp_js from '../src/containers/Cdlp.js'
import src_containers_SerpentVenom_js from '../src/containers/SerpentVenom.js'
import src_containers_Adge_js from '../src/containers/Adge.js'
import src_containers_Nsb_js from '../src/containers/Nsb.js'
import src_containers_404 from '../src/containers/404'

    // Template Map
    const templateMap = {
      t_0: src_containers_Home,
t_1: src_containers_About,
t_2: src_containers_WebProjects,
t_3: src_containers_Rjm,
t_4: src_containers_Platinum,
t_5: src_containers_ErranAndrews_js,
t_6: src_containers_Platzner_js,
t_7: src_containers_UrbanForest_js,
t_8: src_containers_Cdlp_js,
t_9: src_containers_SerpentVenom_js,
t_10: src_containers_Adge_js,
t_11: src_containers_Nsb_js,
t_12: src_containers_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_12"},"/":{t:"t_0"},"about":{t:"t_1"},"web-projects":{t:"t_2",c:{"rejuvenation-site":{t:"t_3"},"platinum-site":{t:"t_4"},"erran-andrews":{t:"t_5"},"platzner":{t:"t_6"},"urban-forest":{t:"t_7"},"cafe-de-la-paz":{t:"t_8"},"serpentvenom":{t:"t_9"},"adge":{t:"t_10"},"ni-sa-bula":{t:"t_11"}}}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
  