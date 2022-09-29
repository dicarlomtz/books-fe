import time

from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class BooksPage(BasePage):
    """By locators"""
    HOME_LINK = By.LINK_TEXT, 'Boogle'
    CREATE_LINK = By.XPATH, "//a//p[contains(., 'Create')]"
    SEARCH_BAR = By.XPATH, "//input[@type='text']"
    BOOKS_GRID = By.XPATH, '//div[form]/div[div]'
    BOOKS_TITLE = By.XPATH, "//span[contains(@class, 'MuiTypography-h5')]"
    BOOKS_AUTHOR_AND_YEAR = By.XPATH, "//span[contains(@class, 'MuiTypography-body1')]"
    PAGINATION_NAV = By.XPATH, '//div[form]/div[nav]'

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(TestData.BASE_URL)

    def is_create_link_redirecting_correctly(self):
        self.do_click(self.CREATE_LINK)
        return self.get_current_url()

    def is_home_link_redirecting_correctly(self):
        self.do_click(self.HOME_LINK)
        return self.get_current_url()

    def is_search_visible(self):
        return self.is_visible(self.SEARCH_BAR)

    def are_books_visible(self):
        return self.is_visible(self.BOOKS_GRID)

    def is_pagination_visible(self):
        return self.is_visible(self.PAGINATION_NAV)

    def do_search_book(self, search):
        self.do_send_keys(self.SEARCH_BAR, search)
        time.sleep(0.5)

        books_filter_by_title = [
            element.text for element in self.get_all_elements_by_locator(self.BOOKS_TITLE)
        ]

        books_filter_by_author_or_year = [
            element.text.split(' - ') for element in self.get_all_elements_by_locator(self.BOOKS_AUTHOR_AND_YEAR)
        ]

        for title in books_filter_by_title:
            if search in title:
                return True

        for author, year in books_filter_by_author_or_year:
            if search in author:
                return True

            if search in year:
                return True

        return False
