import faker from 'faker';

export const user = {
  email: `test+${Date.now()}@example.com`,
  password: faker.internet.password(),
  username: faker.internet.userName().replace(/[_'.]/g, '').toLowerCase().slice(0, 10),
};
