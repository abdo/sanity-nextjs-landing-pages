export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f13b95afa731a0370ebc8c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xp3e4csy',
                  apiId: '8c35fb93-27c8-469d-86d6-ea609c8bb9ac'
                },
                {
                  buildHookId: '61f13b955ed95ba258708f9d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-22n1zjfm',
                  apiId: 'c90c3ace-67ed-45ac-999e-aba004e64785'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abdo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-22n1zjfm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
