import { AngularloginPage } from './app.po';

describe('angularlogin App', () => {
  let page: AngularloginPage;

  beforeEach(() => {
    page = new AngularloginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
