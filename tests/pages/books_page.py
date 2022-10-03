import time

from selenium.webdriver.common.by import By

from config.config import TestData, store_book_id
from pages.base_page import BasePage


class BooksPage(BasePage):
    """By locators"""
    EMAIL = By.ID, 'email'
    PASSWORD = By.ID, 'password'
    LOGIN_BUTTON = By.XPATH, "//button[@type='submit']"
    HOME_LINK = By.LINK_TEXT, 'Boogle'
    CREATE_LINK = By.XPATH, "//a//p[contains(., 'Create')]"
    SEARCH_BAR = By.XPATH, "//input[@type='text']"
    BOOKS_GRID = By.XPATH, '//div[form]/div[div]'
    BOOKS_TITLE = By.XPATH, "//span[contains(@class, 'MuiTypography-h5')]"
    BOOKS_AUTHOR_AND_YEAR = By.XPATH, "//span[contains(@class, 'MuiTypography-body1')]"
    PAGINATION_NAV = By.XPATH, '//div[form]/div[nav]'
    LEARN_MORE_BUTTON = By.XPATH, "//a[contains(@class, 'MuiButton-sizeSmall')]"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/auth/login')
        self.do_login(
            self.EMAIL,
            self.PASSWORD,
            self.LOGIN_BUTTON,
            TestData.EMAIL,
            TestData.PASSWORD
        )
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

    def do_search_book_by_title(self, search):
        self.do_send_keys(self.SEARCH_BAR, search)
        time.sleep(0.5)

        store_book_id(self.get_element_by_locator(self.LEARN_MORE_BUTTON).get_attribute('href'))

        books_filter_by_title = [
            element.text for element in self.get_all_elements_by_locator(self.BOOKS_TITLE)
        ]

        for title in books_filter_by_title:
            if search not in title:
                return False

        return True

    def do_search_book_by_author(self, search):
        self.do_send_keys(self.SEARCH_BAR, search)
        time.sleep(0.5)

        books_filter_by_author_or_year = [
            element.text.split(' - ') for element in self.get_all_elements_by_locator(self.BOOKS_AUTHOR_AND_YEAR)
        ]

        for author, _ in books_filter_by_author_or_year:
            if search not in author:
                return False

        return True

    def do_search_book_by_published_year(self, search):
        self.do_send_keys(self.SEARCH_BAR, str(search))
        time.sleep(0.5)

        books_filter_by_author_or_year = [
            element.text.split(' - ') for element in self.get_all_elements_by_locator(self.BOOKS_AUTHOR_AND_YEAR)
        ]

        for _, published_year in books_filter_by_author_or_year:
            if search not in published_year:
                return False

        return True
