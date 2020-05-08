export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb58e8302f3a7e23017beb2',
                  title: 'Sanity Studio',
                  name: 'inmo-react-gatsby-studio',
                  apiId: 'b096e77f-a652-450f-ad54-62eaf11e19d5'
                },
                {
                  buildHookId: '5eb58e83e0804ae52573c366',
                  title: 'Blog Website',
                  name: 'inmo-react-gatsby',
                  apiId: '013aae37-fc4b-4cbd-9220-4f32265fb040'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanmeyer91/inmo-react-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://inmo-react-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
