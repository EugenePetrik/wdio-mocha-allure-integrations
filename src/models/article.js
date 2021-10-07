import faker from 'faker';

export const article = {
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  tagList: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
};
