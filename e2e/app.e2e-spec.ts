import { EcmsAngularPage } from './app.po';

describe('ecms-angular App', () => {
  let page: EcmsAngularPage;

  beforeEach(() => {
    page = new EcmsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
