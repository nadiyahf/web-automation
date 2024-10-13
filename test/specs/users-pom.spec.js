const Page = require('../../pages/page');
const LoginPage = require('../../pages/login.page');
const DashboardPage = require('../../pages/dashboard.page');
const CreateUsersPage = require('../../pages/createusers.page');

describe('Kasir Aja Create Users', () => {
  beforeEach(async () => {
      Page.open('/')
    });

  it('should create users successfully with valid credentials', async () => {
    //Login to dashboard page and enter to create users page
      await LoginPage.login('nadiyahfitriyah5100@gmail.com','nadiyahfitriyah5100');
      await DashboardPage.clickUsersButton();
      await CreateUsersPage.clickCreateUsersButton();
    //call create user function
      await CreateUsersPage.createUsers('Fany Hijab','fany@gmail.com','fany123');
      await CreateUsersPage.assertSuccessMessage('item ditambahkan');
    });

    it('should create users unsuccessfully with invalid credentials', async () => {
    //Login to dashboard page and enter to create users page
      await DashboardPage.clickUsersButton();
      await CreateUsersPage.clickCreateUsersButton();
    //call create user function
      await CreateUsersPage.createUsers('Fika','','Fika12345');
      await CreateUsersPage.assertFailedMessage('"email" is not allowed to be empty');
    });
  
});