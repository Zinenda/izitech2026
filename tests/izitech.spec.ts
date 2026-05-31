import { expect, test } from "@playwright/test";

test("home page language, menu, FAQ, portfolio and contact interactions work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Soluções tecnológicas");

  await page.locator('.lang-btn[data-lang="en"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Technology solutions");

  await page.setViewportSize({ width: 390, height: 900 });
  await page.locator(".mobile-toggle").click({ force: true });
  await expect(page.locator("#mobile-menu")).toBeVisible();

  await page.locator(".faq-button").first().click();
  await expect(page.locator(".faq-button").first()).toHaveAttribute("aria-expanded", "false");

  await page.locator(".portfolio-card").first().click();
  await expect(page.locator(".portfolio-modal")).toHaveJSProperty("open", true);
  await page.locator(".modal-close").click();

  await page.locator('input[name="name"]').fill("QA User");
  await page.locator('input[name="email"]').fill("qa@example.com");
  await page.locator('textarea[name="message"]').fill("Testing the bilingual contact form.");
  await page.locator(".contact-form button[type='submit']").click();
  await expect(page.locator(".form-status")).toContainText("Thank you");
});

test("core routes and SEO files render", async ({ page }) => {
  for (const route of ["/about/", "/services/", "/portfolio/", "/contact/", "/blog/", "/blog/digital-transformation/"]) {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
  }

  await page.goto("/robots.txt");
  await expect(page.locator("body")).toContainText("Sitemap");
});
