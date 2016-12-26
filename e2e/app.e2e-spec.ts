import { StarwarsAppPage } from './app.po';

describe('starwars-app App', function() {
  let page: StarwarsAppPage;

  beforeEach(() => {
    page = new StarwarsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
