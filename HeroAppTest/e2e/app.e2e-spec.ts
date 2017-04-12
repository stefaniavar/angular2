import { HeroAppTestPage } from './app.po';

describe('hero-app-test App', () => {
  let page: HeroAppTestPage;

  beforeEach(() => {
    page = new HeroAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
