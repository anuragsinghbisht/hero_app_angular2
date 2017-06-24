import { HeroAppPage } from './app.po';

describe('hero-app App', () => {
  let page: HeroAppPage;

  beforeEach(() => {
    page = new HeroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
