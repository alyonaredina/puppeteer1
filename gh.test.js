let page;

beforeEach(async () => {
  jest.setTimeout(60000); // Уникальная задержка для данного теста
  page = await browser.newPage();
  await page.goto("https://github.com/team");
}, 60000);

afterEach(() => {
  jest.setTimeout(60000); // Уникальная задержка для данного теста
  page.close();
});

describe("Github page tests", () => {
  
  test("The h1 header content'", async () => {
    //jest.setTimeout(60000); // Уникальная задержка для данного теста
    //await page.setDefaultNavigationTimeout(60000);
    await page.setDefaultTimeout(70000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    page.waitForNavigation({ waitUntil: 'networkidle0' });
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub'); //('GitHub: Where the world builds software · GitHub');
  }, 60000);

  test("The first link attribute", async () => {
    //jest.setTimeout(60000); // Уникальная задержка для данного теста
    await page.setDefaultTimeout(60000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    //jest.setTimeout(20000); // Уникальная задержка для данного теста
    await page.setDefaultTimeout(40000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Get started with Team');   //("Sign up for free");
  }, 40000);
});

test("click on the 'Start working with the team' button", async () => { 
  //jest.setTimeout(70000); // Уникальная задержка для данного теста
  //await page.setDefaultNavigationTimeout(80000);
  await page.setDefaultTimeout(100000);
  const expected = 'Pricing · Plans for every developer · GitHub';
  const link = await page.$(".HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block");
  await link.click();
  await page.waitForSelector("h1[class='h2-mktg']");  
  page.waitForNavigation({ waitUntil: 'networkidle0' });
  const actual = await page.title();
  expect(actual).toEqual(expected);
}, 100000);


test("click on the 'GitHub Actions cheat sheet' button", async () => { 
  //jest.setTimeout(70000); // Уникальная задержка для данного теста
  //await page.setDefaultNavigationTimeout(80000);
  await page.setDefaultTimeout(100000);
  const expected = 'GitHub Actions Cheat Sheet - GitHub Resources';
  const link = await page.$("body > div:nth-child(1) > div:nth-child(5) > main:nth-child(1) > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
  await link.click();
  await page.waitForSelector(".h2-mktg.mb-3");  
  //page.waitForNavigation({ waitUntil: 'networkidle0' });
  const actual = await page.title();
  expect(actual).toEqual(expected);
}, 100000);


test("click on the 'Read more customer stories' button", async () => { 
  //jest.setTimeout(70000); // Уникальная задержка для данного теста
  //await page.setDefaultNavigationTimeout(80000);
  await page.setDefaultTimeout(100000);
  const expected = 'Customer stories · GitHub';
  const link = await page.$(".link-mktg.text-semibold.color-fg-default.py-1.color-fg-accent.f3-mktg[href='/customer-stories?type=team']");
  await link.click();
  await page.waitForSelector(".sub-nav-title-link.Link--primary.no-underline.f3-mktg.d-inline-block.text-bold.mr-4");  
  //page.waitForNavigation({ waitUntil: 'networkidle0' });
  const actual = await page.title();
  expect(actual).toEqual(expected);
}, 100000);

//  npm run test


