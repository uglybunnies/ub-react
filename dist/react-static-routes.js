
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_containers_Home from '../src/containers/Home'
import src_containers_WebProjects from '../src/containers/WebProjects'
import src_containers_Rjm from '../src/containers/Rjm'
import src_containers_Platinum from '../src/containers/Platinum'
import src_containers_ErranAndrews_js from '../src/containers/ErranAndrews.js'
import src_containers_Platzner_js from '../src/containers/Platzner.js'
import src_containers_404 from '../src/containers/404'

    // Template Map
    const templateMap = {
      t_0: src_containers_Home,
t_1: src_containers_WebProjects,
t_2: src_containers_Rjm,
t_3: src_containers_Platinum,
t_4: src_containers_ErranAndrews_js,
t_5: src_containers_Platzner_js,
t_6: src_containers_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_6"},"/":{t:"t_0"},"web-projects":{t:"t_1",c:{"rejuvenation-site":{t:"t_2"},"platinum-site":{t:"t_3"},"erran-andrews":{t:"t_4"},"platzner":{t:"t_5"}}}}}

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
  