import time

from selenium.webdriver.common.by import By

from config.config import TestData, get_book_id
from pages.base_page import BasePage


class UpdateBookPage(BasePage):
    """By locators"""
    EMAIL = By.ID, 'email'
    PASSWORD = By.ID, 'password'
    LOGIN_BUTTON = By.XPATH, "//button[@type='submit']"
    COVER_IMAGE = By.ID, 'cover_image'
    AVAILABLE = By.XPATH, "//span[input[@id='available']]"
    SAVE_BOOK_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.driver.get(f'{TestData.BASE_URL}/books/update/{get_book_id()}')

    def do_login(self, email, password):
        self.do_send_keys(self.EMAIL, email)
        self.do_send_keys(self.PASSWORD, password)

        self.do_click(self.LOGIN_BUTTON)
        time.sleep(0.5)

    def do_update_book(self, cover_image, modify_available=False):
        self.do_send_keys(self.COVER_IMAGE, cover_image)

        if modify_available:
            self.do_click(self.AVAILABLE)

        self.do_click(self.SAVE_BOOK_BUTTON)

        time.sleep(0.5)
        return self.get_current_url()
