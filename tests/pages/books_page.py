from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class BooksPage(BasePage):
    """By locators"""
    HOME_LINK = By.XPATH, "//a//p[contains(., 'Home')]"
    NEWS_LINK = By.XPATH, "//a//p[contains(., 'News')]"
    CONTACT_LINK = By.XPATH, "//a//p[contains(., 'Contact')]"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.BASE_URL)

    def get_books_page_title(self, title):
        """This is used to get the page title"""
        return self.get_title(title)

    def is_home_link_visible(self):
        """This is used to check the home link"""
        return self.is_visible(self.HOME_LINK)

    def is_news_link_visible(self):
        """This is used to check the news link"""
        return self.is_visible(self.NEWS_LINK)

    def is_contact_link_visible(self):
        """This is used to check the contact link"""
        return self.is_visible(self.CONTACT_LINK)
