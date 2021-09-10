const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/PMall09/PMall09.github.io.git',
  },
  () => {
    console.log('Deploy Completed!')
  }
)
