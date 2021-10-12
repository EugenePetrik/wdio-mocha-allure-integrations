import { logger } from '../configs';
import { User } from '../api/service/user';

export async function createUser(user) {
  logger.debug(`Sign up user via API with - ${JSON.stringify(user)}`);
  await browser.call(async function () {
    return await User.register(user);
  });
}
