import { AppClient2Page } from './app.po';

describe('app-client2 App', () => {
  let page: AppClient2Page;

  beforeEach(() => {
    page = new AppClient2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
