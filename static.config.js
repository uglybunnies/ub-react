import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  getSiteProps: () => ({
    title: 'Ugly Bunnies by Michael Wong',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
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
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                  ],
                }),
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
