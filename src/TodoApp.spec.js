const puppeteer = require("puppeteer");

const isDebugging = () => {
  const debugging_mode_opt = {
    headless: false,
    slowMo: 250,
    devtools: true
  };
  return process.env.NODE_ENV === "debug" ? debugging_mode_opt : {};
};

describe("on page load", () => {
  test("h1 loads correctly", async () => {
    let browser = await puppeteer.launch(isDebugging());
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ""
    });
  });
});
