import { FydjPage } from './app.po';

describe('fydj App', () => {
  let page: FydjPage;

  beforeEach(() => {
    page = new FydjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
