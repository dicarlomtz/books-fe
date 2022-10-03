import time

from selenium.webdriver.common.by import By

from config.config import TestData, get_book_id
from pages.base_page import BasePage
from pages.login_page import LoginPage


class UpdateBookPage(BasePage):
    """By locators"""
    COVER_IMAGE = By.ID, 'cover_image'
    AVAILABLE = By.XPATH, "//span[input[@id='available']]"
    SAVE_BOOK_BUTTON = By.XPATH, "//button[@type='submit']"

    def __init__(self, driver):
        super().__init__(driver)
        self.login_page = LoginPage(driver)
        self.login_page.do_login(TestData.EMAIL, TestData.PASSWORD)
        time.sleep(0.5)
        self.driver.get(f'{TestData.BASE_URL}/books/update/{get_book_id()}')

    def do_update_book(self, cover_image, modify_available=False):
        self.do_send_keys(self.COVER_IMAGE, cover_image)

        if modify_available:
            self.do_click(self.AVAILABLE)

        self.do_click(self.SAVE_BOOK_BUTTON)

        time.sleep(0.5)
        return self.get_current_url()
