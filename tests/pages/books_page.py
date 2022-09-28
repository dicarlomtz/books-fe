from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class BooksPage(BasePage):
    """By locators"""
    HOME_LINK = By.LINK_TEXT, 'Boogle'
    CREATE_LINK = By.XPATH, "//a//p[contains(., 'Create')]"
    BOOKS = By.XPATH, "(//div[contains(@class, 'MuiBox-root')])[4]"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.BASE_URL)

    def is_create_link_redirecting_correctly(self):
        self.do_click(self.CREATE_LINK)
        return self.get_current_url()

    def is_home_link_redirecting_correctly(self):
        self.do_click(self.HOME_LINK)
        return self.get_current_url()

    def are_books_visible(self):
        return self.is_visible(self.BOOKS)
