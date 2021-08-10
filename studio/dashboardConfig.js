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
                  buildHookId: '611294f4762b7e4442ba36c3',
                  title: 'Sanity Studio',
                  name: 'farex-nextjs-sanity-studio',
                  apiId: '046c001f-1dd8-4992-9455-3aab6c52f4a8'
                },
                {
                  buildHookId: '611294f44578ec3bd68f29b7',
                  title: 'Landing pages Website',
                  name: 'farex-nextjs-sanity',
                  apiId: '0b8a499d-d29c-4a91-a45f-7630c05bb328'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/farhd/farex-nextjs-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://farex-nextjs-sanity.netlify.app', category: 'apps'}
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
