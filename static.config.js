export default {
    getSiteProps: () => ({
        title: 'React Static',
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
                is404: true,
                component: 'src/containers/404',
            },
        ]
    }
}
