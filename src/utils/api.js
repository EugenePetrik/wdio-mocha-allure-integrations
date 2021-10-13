import { logger } from '../configs';
import { User } from '../api/service/user';
import { HomePage } from '../page_objects/home';

export async function createUser(user) {
  logger.debug(`Sign up user via API with - ${JSON.stringify(user)}`);
  await browser.call(async function () {
    return await User.register(user);
  });
}

export async function signInUser(user) {
  logger.debug(`Sign in user via API with - ${JSON.stringify(user)}`);

  const { data } = await browser.call(async function () {
    return await User.login(user);
  });

  const jwtToken = data['user']['token'];

  if (jwtToken) {
    logger.debug(`User JWT Token - ${jwtToken}`);
  } else {
    throw new Error('Did not receive user JWT Token in response');
  }

  logger.debug('Open Home page');

  const homePage = new HomePage();
  await homePage.open();

  logger.debug('Add JWT Token to Local Storage');
 
  await browser.execute(function (key, value) {
    window.localStorage.setItem(key, value);
  },'id_token', jwtToken);

  logger.debug('Reload the page after adding the JWT Token');

  await homePage.refreshCurrentPage();
  await homePage.waitHomePageLoaded();
}

export async function createUserAndSignIn(user) {
  logger.debug(`Sign up user via API with - ${JSON.stringify(user)}`);

  const { data } = await browser.call(async function () {
    return await User.register(user);
  });

  const jwtToken = data['user']['token'];

  if (jwtToken) {
    logger.debug(`User JWT Token - ${jwtToken}`);
  } else {
    throw new Error('Did not receive user JWT Token in response');
  }

  logger.debug('Open Home page');

  const homePage = new HomePage();
  await homePage.open();

  logger.debug('Add JWT Token to Local Storage');

  await browser.execute(function (key, value) {
    window.localStorage.setItem(key, value);
  },'id_token', jwtToken);

  logger.debug('Reload the page after adding the JWT Token');

  await homePage.refreshCurrentPage();
  await homePage.waitHomePageLoaded();
}
