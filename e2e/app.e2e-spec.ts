import { CampusRecruitmentApplicationPage } from './app.po';

describe('campus-recruitment-application App', function() {
  let page: CampusRecruitmentApplicationPage;

  beforeEach(() => {
    page = new CampusRecruitmentApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
