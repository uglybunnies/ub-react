
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_containers_Home from '/Users/michael.wong/projects/ub-react/src/containers/Home'
import src_containers_About from '/Users/michael.wong/projects/ub-react/src/containers/About'
import src_containers____ from '/Users/michael.wong/projects/ub-react/src/containers/404'
    const templateMap = {
    t_0: src_containers_Home,
t_1: src_containers_About,
t_2: src_containers____
  }
    const templateTree = {c:{"404":{t:"t_2"},"/":{t:"t_0"},"about":{t:"t_1"}}}
    
    const getTemplateForPath = path => {
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
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return Template && <Template {...props} />
    }} />
  
        )
      }
    }
  