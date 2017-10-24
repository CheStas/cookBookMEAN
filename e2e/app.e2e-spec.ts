import { CookBookPage } from './app.po';

describe('cook-book App', () => {
  let page: CookBookPage;

  beforeEach(() => {
    page = new CookBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
