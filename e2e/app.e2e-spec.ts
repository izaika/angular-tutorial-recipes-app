import { AngularTutorialRecipesAppPage } from './app.po';

describe('angular-tutorial-recipes-app App', () => {
  let page: AngularTutorialRecipesAppPage;

  beforeEach(() => {
    page = new AngularTutorialRecipesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
