const Page = require('../../pages/page');
const LoginPage = require('../../pages/login.page');
const DashboardPage = require('../../pages/dashboard.page');

describe('Kasir Aja Login Test', () => {
    beforeEach(async () => {
        // Open browser
        await Page.open('https://www.kasirdemo.vercel.app/');
    });

    it('should login unsuccessfully with invalid password', async () => {
        await LoginPage.login('nadiyahfitriyah5100@gmail.com', 'nadiyahfitriyah');
        await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    });

    it('allows users to login with valid credentials', async () => {
        await LoginPage.login('nadiyahfitriyah5100@gmail.com', 'nadiyahfitriyah5100');
        await DashboardPage.assertDashboardUrl();
    });
});
