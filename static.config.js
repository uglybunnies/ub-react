import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  getSiteData: () => ({
    title: 'Ugly Bunnies by Michael Wong',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
        {
          path: '/about',
          component: 'src/containers/About',
        },
      {
        path: '/web-projects',
        component: 'src/containers/WebProjects'
      },
      {
          path: '/web-projects/rejuvenation-site',
          component: 'src/containers/Rjm',
      },
      {
          path: '/web-projects/platinum-site',
          component: 'src/containers/Platinum',
      },
      {
          path: '/web-projects/erran-andrews',
          component: 'src/containers/ErranAndrews.js'
      },
      {
          path: '/web-projects/platzner',
          component: 'src/containers/Platzner.js'
      },
      {
          path: '/web-projects/urban-forest',
          component: 'src/containers/UrbanForest.js'
      },
      {
          path: '/web-projects/cafe-de-la-paz',
          component: 'src/containers/Cdlp.js'
      },
      {
          path: '/web-projects/serpentvenom',
          component: 'src/containers/SerpentVenom.js'
      },
      {
          path: '/web-projects/adge',
          component: 'src/containers/Adge.js'
      },
      {
          path: '/web-projects/ni-sa-bula',
          component: 'src/containers/Nsb.js'
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
