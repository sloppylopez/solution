import {AppPage} from './app.po';

describe('angular-review-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should show authors list', () => {
    page.navigateTo();
    expect(page.getAuthorListNames().getText())
      .toBe(
        'Author1\n' + 'Author2\n' + 'Author3\n' + 'Author4');
  });
});
