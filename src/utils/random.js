export class Random {
  randomNumberGenerator(charsAmount) {
    let text = '';
    const possible = '0123456789';
    for (let i = 0; i < charsAmount; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomNumberGeneratorWithoutZero(charsAmount) {
    let text = '';
    const possible = '123456789';
    for (let i = 0; i < charsAmount; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  randomTextGenerator(charsAmount) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < charsAmount; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
