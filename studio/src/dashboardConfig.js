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
                  buildHookId: '5f86b7ddd614ff8b5ccc28c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kcb125t4',
                  apiId: '5fa4245c-66fd-4105-ab96-51e02bd5de99'
                },
                {
                  buildHookId: '5f86b7dd13815489d2fea2ae',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r52hcctj',
                  apiId: '614ef8bf-8957-43c4-bf7f-46d4eef0cf45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bpetrus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r52hcctj.netlify.app', category: 'apps' }
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
