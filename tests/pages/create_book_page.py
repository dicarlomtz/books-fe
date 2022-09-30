import time

from selenium.webdriver.common.by import By

from config.config import TestData
from pages.base_page import BasePage


class CreateBookPage(BasePage):
    """By locators"""
    HOME_LINK = By.LINK_TEXT, 'Boogle'
    TITLE = By.ID, 'title'
    DESCRIPTION = By.ID, 'description'
    URL = By.ID, 'url'
    PUBLISHED_YEAR = By.ID, 'published_year'
    AVAILABLE = By.XPATH, "//span[input[@id='available']]"
    COVER_IMAGE = By.ID, 'cover_image'
    AUTHORS = By.ID, 'authors'
    ADD_AUTHORS_BUTTON = By.XPATH, "(//button[contains(., 'Add')])[1]"
    CO_AUTHORS = By.ID, 'co-authors'
    ADD_CO_AUTHORS_BUTTON = By.XPATH, "(//button[contains(., 'Add')])[2]"
    SAVE_BOOK_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/books/create')

    def do_create_book(self, title, description, url, published_year, available, cover_image, authors, co_authors):
        self.do_send_keys(self.TITLE, title)
        self.do_send_keys(self.DESCRIPTION, description)
        self.do_send_keys(self.URL, url)
        self.do_send_keys(self.PUBLISHED_YEAR, published_year)

        if available:
            self.do_click(self.AVAILABLE)

        if cover_image:
            self.do_send_keys(self.COVER_IMAGE, cover_image)

        for author in authors:
            self.do_send_keys(self.AUTHORS, author)
            self.do_click(self.ADD_AUTHORS_BUTTON)

        for co_author in co_authors:
            self.do_send_keys(self.CO_AUTHORS, co_author)
            self.do_click(self.ADD_CO_AUTHORS_BUTTON)

        self.do_click(self.SAVE_BOOK_BUTTON)

        time.sleep(0.5)
        return self.get_current_url()

    def is_home_link_redirecting_correctly(self):
        self.do_click(self.HOME_LINK)
        return self.get_current_url()
