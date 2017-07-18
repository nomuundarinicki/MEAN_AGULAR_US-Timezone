import { UsTimezonePage } from './app.po';

describe('us-timezone App', () => {
  let page: UsTimezonePage;

  beforeEach(() => {
    page = new UsTimezonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
