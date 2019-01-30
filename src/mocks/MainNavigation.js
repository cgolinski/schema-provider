import faker from 'faker'

export const MainNavigation = () => ({
  title: faker.name.title(),
  url: faker.internet.url()
})
